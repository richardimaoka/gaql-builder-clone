import { useState } from "react";
import "./App.css";

const CheckBox = ({ fieldName }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        id={fieldName}
        checked={checked}
        label="abc"
        onChange={() => {
          setChecked(!checked);
          console.log("onChange called");
        }}
      />
      <label htmlFor={fieldName}>{fieldName}</label>
    </div>
  );
};

function App() {
  const attributeResourceFields = {
    "ad_group.ad_rotation_mode": { checked: false },
    "ad_group.audience_setting.use_audience_grouped": { checked: false },
    "ad_group.base_ad_group": { checked: false },
    "ad_group.campaign": { checked: false },
    "ad_group.cpc_bid_micros": { checked: false },
    "ad_group.cpm_bid_micros": { checked: false },
    "ad_group.cpv_bid_micros": { checked: false },
    "ad_group.display_custom_bid_dimension": { checked: false },
    "ad_group.effective_cpc_bid_micros": { checked: false },
    "ad_group.effective_target_cpa_micros": { checked: false },
    "ad_group.effective_target_cpa_source": { checked: false },
    "ad_group.effective_target_roas": { checked: false },
    "ad_group.effective_target_roas_source": { checked: false },
    "ad_group.excluded_parent_asset_field_types": { checked: false },
    "ad_group.explorer_auto_optimizer_setting.opt_in": { checked: false },
    "ad_group.final_url_suffix": { checked: false },
    "ad_group.id": { checked: false },
    "ad_group.labels": { checked: false },
    "ad_group.name": { checked: false },
    "ad_group.percent_cpc_bid_micros": { checked: false },
    "ad_group.resource_name": { checked: false },
    "ad_group.status": { checked: false },
    "ad_group.target_cpa_micros": { checked: false },
    "ad_group.target_cpm_micros": { checked: false },
    "ad_group.target_roas": { checked: false },
    "ad_group.targeting_setting.target_restrictions": { checked: false },
    "ad_group.tracking_url_template": { checked: false },
    "ad_group.type": { checked: false },
    "ad_group.url_custom_parameter": { checked: false },
  };

  return (
    <div>
      {Object.keys(attributeResourceFields).map((fieldName, index) => (
        <CheckBox key={fieldName} fieldName={fieldName} />
      ))}
    </div>
  );
}

export default App;
