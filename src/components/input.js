import React from "react";

export default function input({type,placeholder,icon, ...nativeProps}) {
  
    return (
    <div class="form-group position-relative has-icon-left mb-4">
      <input
        type={type}
        className="form-control form-control-xl"
        placeholder={placeholder}
        {...nativeProps}
      />
      <div className="form-control-icon">
        <i className={icon}></i>
      </div>
    </div>
  );
}
