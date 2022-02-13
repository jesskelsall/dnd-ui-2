import { saveAs } from "file-saver";
import { DateTime } from "luxon";
import type { NextPage } from "next";
import React, { useState } from "react";
import styled from "styled-components";
import { Button, FormGroup, FormRow, NavButton } from "../../components";
import { APP_NAME } from "../../consts";
import { jsonToString, updateDataStore } from "../../functions";
import { useDataStore, useSocket } from "../../providers";
import { IDataStore, TMaterialColour } from "../../types";

const IMPORT_COLOUR_DEFAULT: TMaterialColour = "grey";
const IMPORT_STATUS_DELAY = 2000;
const IMPORT_INPUT_ID = "json-import";

const FileInput = styled.input`
  display: none;
`;

const ControlPage: NextPage = () => {
  const socket = useSocket();
  const { dataStore } = useDataStore();
  const [importColour, setImportColour] = useState<TMaterialColour>(
    IMPORT_COLOUR_DEFAULT
  );

  const showImportOutcome = (colour: TMaterialColour, message?: string) => {
    if (message) console.info("Import status:", message);

    setImportColour(colour);
    setTimeout(
      () => setImportColour(IMPORT_COLOUR_DEFAULT),
      IMPORT_STATUS_DELAY
    );
  };

  const onImportClick = () => {
    const input = document.getElementById(IMPORT_INPUT_ID);
    if (!input) return;

    input.click();
  };

  const onImportChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;

    if (files && files.length) {
      jsonToString(files[0]).then((jsonString) => {
        try {
          const importedDataStore = JSON.parse(jsonString) as IDataStore;

          updateDataStore(socket, {
            action: "datastore-import",
            payload: importedDataStore,
          });
          showImportOutcome("green");
        } catch (error) {
          showImportOutcome("red", "JSON parse error:");
          console.error(error);
        }
      });
    } else {
      showImportOutcome("orange", "No file to import.");
    }
  };

  const onExport = () => {
    const json = JSON.stringify(dataStore, null, 2);
    const blob = new Blob([json], { type: "text/plain;charset=utf-8" });

    const date = DateTime.now().toFormat("yyyy-LL-dd HH-mm-ss");
    const name = `${APP_NAME} ${date}.json`;

    saveAs(blob, name);
  };

  return (
    <>
      <FormGroup title="Screens">
        <FormRow>
          <NavButton href="control/mapScreen" large>
            Map
          </NavButton>
        </FormRow>
      </FormGroup>

      <FormGroup title="Data">
        <FormRow>
          <Button colour={importColour} large onClick={onImportClick}>
            Import
          </Button>
          <Button large onClick={onExport}>
            Export
          </Button>
        </FormRow>
      </FormGroup>

      {/* Hidden JSON file input for import */}
      <FileInput
        accept=".json"
        id={IMPORT_INPUT_ID}
        multiple={false}
        onChange={onImportChange}
        type="file"
      />
    </>
  );
};

export default ControlPage;
