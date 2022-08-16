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
  const attributeResourceFields = [
    "ad_group.ad_rotation_mode",
    "ad_group.audience_setting.use_audience_grouped",
    "ad_group.base_ad_group",
    "ad_group.campaign",
    "ad_group.cpc_bid_micros",
    "ad_group.cpm_bid_micros",
    "ad_group.cpv_bid_micros",
    "ad_group.display_custom_bid_dimension",
    "ad_group.effective_cpc_bid_micros",
    "ad_group.effective_target_cpa_micros",
    "ad_group.effective_target_cpa_source",
    "ad_group.effective_target_roas",
    "ad_group.effective_target_roas_source",
    "ad_group.excluded_parent_asset_field_types",
    "ad_group.explorer_auto_optimizer_setting.opt_in",
    "ad_group.final_url_suffix",
    "ad_group.id",
    "ad_group.labels",
    "ad_group.name",
    "ad_group.percent_cpc_bid_micros",
    "ad_group.resource_name",
    "ad_group.status",
    "ad_group.target_cpa_micros",
    "ad_group.target_cpm_micros",
    "ad_group.target_roas",
    "ad_group.targeting_setting.target_restrictions",
    "ad_group.tracking_url_template",
    "ad_group.type",
    "ad_group.url_custom_parameter",
  ];

  return (
    <div>
      {attributeResourceFields.map((fieldName) => (
        <CheckBox fieldName={fieldName} />
      ))}
    </div>
  );
}

export default App;
