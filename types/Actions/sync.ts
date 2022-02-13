export interface IActionSyncApplyChanges {
  action: "sync-applychanges";
}

export interface IActionSyncSetRealTime {
  action: "sync-set-realtime";
  payload: boolean;
}
