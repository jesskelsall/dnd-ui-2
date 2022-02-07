import _ from "lodash/fp";
import { DATA_STORE_TEMPLATE } from "../../consts";
import {
  IDataCopy,
  IDataStore,
  IMap,
  IMapView,
  TMapId,
  TMapViewId,
} from "../../types";

export class DataStore {
  private data: IDataStore = DATA_STORE_TEMPLATE;

  // Propagate changes to the data copy depending on the sync strategy
  private updateCopies = (updateCopy: (copy: IDataCopy) => IDataCopy): void => {
    const { realTime } = this.data.sync;

    const updatedControlCopy = updateCopy(this.data.copies.control);

    this.data = _.flow(
      // Apply changes directly to the control copy
      _.set("copies.control", updatedControlCopy),
      // If realTime: also apply to the display copy
      // Otherwise: set sync.changes to show if the copies differ
      realTime
        ? _.set("copies.display", updatedControlCopy)
        : _.set(
            "sync.changes",
            !_.isEqual(updatedControlCopy, this.data.copies.display)
          )
    )(this.data);
  };

  public getData = (): IDataStore => this.data;

  // Actions

  public mapDelete = (payload: TMapId) => {
    this.updateCopies(_.unset(`screens.map.maps.${payload}`));
  };

  public mapSet = (payload: IMap) => {
    this.updateCopies(_.set(`screens.map.maps.${payload.id}`, payload));
  };

  public mapViewDelete = (payload: TMapViewId) => {
    this.updateCopies(_.unset(`screens.map.mapViews.${payload}`));
  };

  public mapViewSet = (payload: IMapView) => {
    this.updateCopies(_.set(`screens.map.mapViews.${payload.id}`, payload));
  };
}
