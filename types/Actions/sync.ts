export interface IActionSyncApplyChanges {
  action: "sync-applychanges";
  payload: undefined;
}

export interface IActionSyncSetRealTime {
  action: "sync-set-realtime";
  payload: boolean;
}
