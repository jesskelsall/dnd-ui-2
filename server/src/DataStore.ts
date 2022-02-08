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

  public mapDelete = (mapId: TMapId) => {
    this.updateCopies(_.unset(`screens.map.maps.${mapId}`));
  };

  public mapSet = (map: IMap) => {
    this.updateCopies(_.set(`screens.map.maps.${map.id}`, map));
  };

  public mapViewDelete = (mapViewId: TMapViewId) => {
    this.updateCopies(_.unset(`screens.map.mapViews.${mapViewId}`));
  };

  public mapViewSet = (mapView: IMapView) => {
    this.updateCopies(_.set(`screens.map.mapViews.${mapView.id}`, mapView));
  };

  public syncApplyChanges = () => {
    this.data = _.flow(
      _.set("copies.display", this.data.copies.control),
      _.set("sync.changes", false)
    )(this.data);
  };

  public syncSetRealTime = (realTime: boolean) => {
    this.data = _.flow(
      _.set("sync.realTime", realTime),
      realTime ? _.set("copies.display", this.data.copies.control) : _.identity
    )(this.data);
  };
}
