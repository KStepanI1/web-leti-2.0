import React, { useContext, useState, useMemo } from "react";
import Modal, { ModalProps } from "./Modal";
import FormField from "../Form/FormField";
import { StoreContext } from "../..";
import settingsApi from "../../api/Settings";

import { ISettings } from "../../types/ISettings";
import { WEEK_OPTIONS } from "../../utils/constants";
import SwitchButton from "../Buttons/SwitchButton";

function SettingsModal({ ...props }: ModalProps) {
  const { main } = useContext(StoreContext);

  const prevSettings = useMemo(
    () => JSON.parse(JSON.stringify(main.settings)),
    []
  );

  const [_settings, setSettings] = useState<ISettings>(
    prevSettings ?? ({} as ISettings)
  );

  const handleSumbit = async () => {
    if (_settings) {
      await settingsApi.updateSettings({ body: _settings });
      await main.updateSettings();
    }
  };

  const { week } = _settings;

  return (
    <Modal {...props} size="small">
      <Modal.Header>
        <Modal.Title>Настройки</Modal.Title>
      </Modal.Header>
      <Modal.Form>
        <Modal.Body>
          <FormField name="Четность недели">
            <SwitchButton
              options={WEEK_OPTIONS}
              value={
                WEEK_OPTIONS.find((opt) => opt.value === week) ||
                WEEK_OPTIONS[0]
              }
              onChange={(e) => {
                if (!e) return;

                setSettings((state) => ({ ...state, week: e.value }));
              }}
            />
          </FormField>
        </Modal.Body>
        <Modal.Footer onConfirm={handleSumbit} confrimDisabled={!_settings} />
      </Modal.Form>
    </Modal>
  );
}

export default SettingsModal;
