import React from "react";
import "./FuelBill.css";

function FuelBill(props) {
  return (
    <div data-v-c7ff15a2="" className="container">
      <h3 data-v-c7ff15a2="" className="head_title">
        <span data-v-c7ff15a2="" className="logo100">
          Fuel
        </span>{" "}
        Bill{" "}
      </h3>
      <br data-v-c7ff15a2="" />
      <h5 data-v-c7ff15a2="">Select Template</h5>
      <div data-v-c7ff15a2="" role="radiogroup" tabIndex="-1" className="mb-3 bv-no-focus-ring" id="__BVID__59">
        <div className="custom-control custom-control-inline custom-radio">
          <input type="radio" className="custom-control-input" value="1" id="__BVID__59_BV_option_0" name="__BVID__59" />
          <label className="custom-control-label" htmlFor="__BVID__59_BV_option_0">
            <span>Template 1</span>
          </label>
        </div>
        <div className="custom-control custom-control-inline custom-radio">
          <input type="radio" className="custom-control-input" value="5" id="__BVID__59_BV_option_1" name="__BVID__59" />
          <label className="custom-control-label" htmlFor="__BVID__59_BV_option_1">
            <span>Template 2</span>
          </label>
        </div>
        <div className="custom-control custom-control-inline custom-radio">
          <input type="radio" className="custom-control-input" value="3" id="__BVID__59_BV_option_2" name="__BVID__59" />
          <label className="custom-control-label" htmlFor="__BVID__59_BV_option_2">
            <span>Template 3</span>
          </label>
        </div>
        <div className="custom-control custom-control-inline custom-radio">
          <input type="radio" className="custom-control-input" value="4" id="__BVID__59_BV_option_3" name="__BVID__59" />
          <label className="custom-control-label" htmlFor="__BVID__59_BV_option_3">
            <span>Template 4</span>
          </label>
        </div>
      </div>
      <div data-v-c7ff15a2="" className="row">
        <div data-v-c7ff15a2="" className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <h5 data-v-c7ff15a2="">Fuel Station Details</h5>
          <h5 data-v-c7ff15a2="">Select logo</h5>
          <div data-v-c7ff15a2="" role="radiogroup" tabIndex="-1" className="mb-3 bv-no-focus-ring" id="__BVID__64">
            <div className="custom-control custom-control-inline custom-radio">
              <input type="radio" className="custom-control-input" value="1" id="__BVID__64_BV_option_0" name="__BVID__64" />
              <label className="custom-control-label" htmlFor="__BVID__64_BV_option_0">
                <span>Bharat Petroleum</span>
              </label>
            </div>
            <div className="custom-control custom-control-inline custom-radio">
              <input type="radio" className="custom-control-input" value="2" id="__BVID__64_BV_option_1" name="__BVID__64" />
              <label className="custom-control-label" htmlFor="__BVID__64_BV_option_1">
                <span>Indian Oil</span>
              </label>
            </div>
            <div className="custom-control custom-control-inline custom-radio">
              <input type="radio" className="custom-control-input" value="3" id="__BVID__64_BV_option_2" name="__BVID__64" />
              <label className="custom-control-label" htmlFor="__BVID__64_BV_option_2">
                <span>HP Oil</span>
              </label>
            </div>
            <div className="custom-control custom-control-inline custom-radio">
              <input type="radio" className="custom-control-input" value="4" id="__BVID__64_BV_option_3" name="__BVID__64" />
              <label className="custom-control-label" htmlFor="__BVID__64_BV_option_3">
                <span>Essar Oil</span>
              </label>
            </div>
          </div>
          <fieldset data-v-c7ff15a2="" className="form-group" id="__BVID__69">
            <legend tabIndex="-1" className="bv-no-focus-ring col-form-label pt-0" id="__BVID__69__BV_label_">
              Fuel Station Name
            </legend>
            <div>
              <input data-v-c7ff15a2="" type="text" placeholder="Fuel Station Name" required="required" aria-required="true" className="form-control" id="__BVID__70" />
              <div data-v-c7ff15a2="" className="invalid-feedback">
                {" "}
                Fuel station name is required
              </div>
            </div>
          </fieldset>
          <fieldset data-v-c7ff15a2="" className="form-group" id="__BVID__71">
            <legend tabIndex="-1" className="bv-no-focus-ring col-form-label pt-0" id="__BVID__71__BV_label_">
              Fuel Station Address
            </legend>
            <div>
              <textarea
                data-v-c7ff15a2=""
                placeholder="Fuel Station Address...."
                wrap="soft"
                className="form-control"
                id="__BVID__72"
                style={{
                  resize: "none",
                  overflowY: "scroll",
                  height: "86px",
                }}
              ></textarea>
              <div data-v-c7ff15a2="" className="invalid-feedback">
                {" "}
                Fuel station address is required
              </div>
            </div>
          </fieldset>

          <div data-v-c7ff15a2="" className="row">
            <div data-v-c7ff15a2="" className="col-lg-6">
              <fieldset data-v-c7ff15a2="" className="form-group" id="__BVID__73">
                <legend tabIndex="-1" className="bv-no-focus-ring col-form-label pt-0" id="__BVID__73__BV_label_">
                  Fuel Rate
                </legend>
                <div>
                  <input data-v-c7ff15a2="" type="text" placeholder="Fuel Rate" className="form-control" id="__BVID__74" required="required" aria-required="true" />
                  <div data-v-c7ff15a2="" className="invalid-feedback">
                    {" "}
                    Fuel rate is required
                  </div>
                </div>
              </fieldset>
            </div>
            <div data-v-c7ff15a2="" className="col-lg-6">
              <fieldset data-v-c7ff15a2="" className="form-group" id="__BVID__75">
                <legend tabIndex="-1" className="bv-no-focus-ring col-form-label pt-0" id="__BVID__75__BV_label_">
                  Total Amount
                </legend>
                <div>
                  <input data-v-c7ff15a2="" type="text" placeholder="Total Amount" className="form-control" id="__BVID__76" required="required" aria-required="true" />
                  <div data-v-c7ff15a2="" className="invalid-feedback">
                    {" "}
                    Total Amount is required
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div data-v-c7ff15a2="" className="row">
            <div data-v-c7ff15a2="" className="col-lg-6">
              <label data-v-c7ff15a2="">Fuel Bill Date</label>
              <div data-v-c7ff15a2="" role="group" className="b-form-btn-label-control dropdown b-form-datepicker mb-2 form-control" id="__BVID__128__outer_" lang="en-GB" aria-labelledby="__BVID__128__value_">
                <button type="button" aria-haspopup="dialog" aria-expanded="false" className="btn h-auto" id="__BVID__128">
                  <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="calendar" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi-calendar b-icon bi">
                    <g>
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"></path>
                    </g>
                  </svg>
                </button>

                <div role="dialog" tabIndex="-1" aria-modal="false" className="dropdown-menu" id="__BVID__128__dialog_" aria-labelledby="__BVID__128__value_"></div>
                <label className="form-control" id="__BVID__128__value_" htmlFor="__BVID__128">
                  Mon, 30 Jan 2023
                </label>
              </div>
            </div>
            <div data-v-c7ff15a2="" className="col-lg-6">
              <label data-v-c7ff15a2="">Fuel Bill Time</label>
              <div data-v-c7ff15a2="" role="group" dir="ltr" className="b-form-btn-label-control dropdown b-form-timepicker mb-2 form-control" id="__BVID__131__outer_" lang="en" aria-labelledby="__BVID__131__value_">
                <button type="button" aria-haspopup="dialog" aria-expanded="false" className="btn h-auto" id="__BVID__131">
                  <svg viewBox="0 0 16 16" width="1em" height="1em" focusable="false" role="img" aria-label="clock" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi-clock b-icon bi">
                    <g>
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                    </g>
                  </svg>
                </button>

                <div role="dialog" tabIndex="-1" aria-modal="false" className="dropdown-menu" id="__BVID__131__dialog_" aria-labelledby="__BVID__131__value_"></div>
                <label aria-required="true" className="form-control" id="__BVID__131__value_" htmlFor="__BVID__131">
                  12:31 AM
                </label>
              </div>
            </div>
          </div>
          <h5 data-v-c7ff15a2="">Customer Details</h5>
          <fieldset data-v-c7ff15a2="" className="form-group" id="__BVID__134">
            <legend tabIndex="-1" className="bv-no-focus-ring col-form-label pt-0" id="__BVID__134__BV_label_">
              Customer Name
            </legend>
            <div>
              <input data-v-c7ff15a2="" type="text" placeholder="Enter Customer Name" required="required" aria-required="true" className="form-control" id="__BVID__135" />
              <div data-v-c7ff15a2="" className="invalid-feedback">
                {" "}
                Customer name is required
              </div>
            </div>
          </fieldset>
          <div data-v-c7ff15a2="" className="row">
            <div data-v-c7ff15a2="" className="col-lg-6">
              <fieldset data-v-c7ff15a2="" className="form-group" id="__BVID__85">
                <legend tabIndex="-1" className="bv-no-focus-ring col-form-label pt-0" id="__BVID__85__BV_label_">
                  Vehical Number
                </legend>
                <div>
                  <input data-v-c7ff15a2="" type="text" placeholder="Vehicle Number" required="required" aria-required="true" className="form-control" id="__BVID__86" />
                  <div data-v-c7ff15a2="" className="invalid-feedback">
                    {" "}
                    Vehicle number is required
                  </div>
                </div>
              </fieldset>
            </div>
            <div data-v-c7ff15a2="" className="col-lg-6">
              <fieldset data-v-c7ff15a2="" className="form-group" id="__BVID__87">
                <legend tabIndex="-1" className="bv-no-focus-ring col-form-label pt-0" id="__BVID__87__BV_label_">
                  Vehicle Type
                </legend>
                <div>
                  <select data-v-c7ff15a2="" required="required" aria-required="true" className="custom-select" id="__BVID__88">
                    <option value="">Select One</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Petrol">Petrol</option>
                    <option value="CNG">CNG</option>
                    <option value="Electric">Electric</option>
                  </select>
                  <div data-v-c7ff15a2="" className="invalid-feedback">
                    {" "}
                    Vehicle type is required
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div data-v-c7ff15a2="" className="row">
            <div data-v-c7ff15a2="" className="col-lg-6">
              <fieldset data-v-c7ff15a2="" className="form-group" id="__BVID__89">
                <legend tabIndex="-1" className="bv-no-focus-ring col-form-label pt-0" id="__BVID__89__BV_label_">
                  Payment Method
                </legend>
                <div>
                  <select data-v-c7ff15a2="" required="required" aria-required="true" className="custom-select" id="__BVID__90">
                    <option value="">Select One</option>
                    <option value="Cash">Cash</option>
                    <option value="Online">Online</option>
                    <option value="Card">Card</option>
                  </select>
                  <div data-v-c7ff15a2="" className="invalid-feedback">
                    {" "}
                    Payment Method is required
                  </div>
                </div>
              </fieldset>
            </div>
            <div data-v-c7ff15a2="" className="col-lg-6">
              <fieldset data-v-c7ff15a2="" className="form-group" id="__BVID__91">
                <legend tabIndex="-1" className="bv-no-focus-ring col-form-label pt-0" id="__BVID__91__BV_label_">
                  Invoice Number
                </legend>
                <div>
                  <input data-v-c7ff15a2="" type="text" placeholder="Invoice Number/Receipt Number" required="required" aria-required="true" className="form-control" id="__BVID__92" />
                </div>
              </fieldset>
            </div>
            <div data-v-c7ff15a2="" className="col-lg-12">
              <div data-v-c7ff15a2="" role="radiogroup" tabIndex="-1" className="mb-2 bv-no-focus-ring" id="__BVID__93">
                <div className="custom-control custom-control-inline custom-radio">
                  <input type="radio" className="custom-control-input" value="" id="__BVID__93_BV_option_0" name="__BVID__93" />
                  <label className="custom-control-label" htmlFor="__BVID__93_BV_option_0">
                    <span>None</span>
                  </label>
                </div>
                <div className="custom-control custom-control-inline custom-radio">
                  <input type="radio" className="custom-control-input" value="1" id="__BVID__93_BV_option_1" name="__BVID__93" />
                  <label className="custom-control-label" htmlFor="__BVID__93_BV_option_1">
                    <span>CST TIN</span>
                  </label>
                </div>
                <div className="custom-control custom-control-inline custom-radio">
                  <input type="radio" className="custom-control-input" value="2" id="__BVID__93_BV_option_2" name="__BVID__93" />
                  <label className="custom-control-label" htmlFor="__BVID__93_BV_option_2">
                    <span>GST TIN</span>
                  </label>
                </div>
                <div className="custom-control custom-control-inline custom-radio">
                  <input type="radio" className="custom-control-input" value="3" id="__BVID__93_BV_option_3" name="__BVID__93" />
                  <label className="custom-control-label" htmlFor="__BVID__93_BV_option_3">
                    <span>TXN NO</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div data-v-c7ff15a2="" className="row">
            <div data-v-c7ff15a2="" className="col-lg-12">
              <fieldset data-v-c7ff15a2="" className="form-group" id="__BVID__98">
                <legend tabIndex="-1" className="bv-no-focus-ring col-form-label pt-0" id="__BVID__98__BV_label_">
                  Email Attachment File Name
                </legend>
                <div>
                  <input data-v-c7ff15a2="" type="text" placeholder="Enter File Name" required="required" aria-required="true" className="form-control" id="__BVID__99" />
                  <small tabIndex="-1" className="form-text text-muted" id="__BVID__98__BV_description_">
                    This will be used as name of pdf attachment sent over the email
                  </small>
                </div>
              </fieldset>
            </div>
          </div>
          <div data-v-c7ff15a2="" className="row">
            <div data-v-c7ff15a2="" className="col"></div>
            <div data-v-c7ff15a2="" className="col-lg-12">
              <fieldset data-v-c7ff15a2="" className="form-group" id="__BVID__100">
                <legend tabIndex="-1" className="bv-no-focus-ring col-form-label pt-0" id="__BVID__100__BV_label_">
                  Email Address
                </legend>
                <div>
                  <input data-v-c7ff15a2="" type="email" placeholder="Enter Email" required="required" aria-required="true" className="form-control" id="__BVID__101" />
                  <div data-v-c7ff15a2="" className="invalid-feedback">
                    {" "}
                    Enter valid email
                  </div>
                  <small tabIndex="-1" className="form-text text-muted" id="__BVID__100__BV_description_">
                    Please enter correct email. Bill PDF will be sent to this email address.
                  </small>
                </div>
              </fieldset>
            </div>
          </div>
          <button data-v-c7ff15a2="" type="submit" className="btn btn mb-0 btn-primary">
            {" "}
            Generate
          </button>
          <button data-v-c7ff15a2="" type="Clear" className="btn btn ml-3 mb-0 btn-primary">
            Clear
          </button>
          <div data-v-7e8502bc="" data-v-c7ff15a2="" className="creditsRemain">
            <span data-v-7e8502bc="">This bill generation will require 10 credit.</span>
            <br data-v-7e8502bc="" />
          </div>
        </div>
        <div data-v-c7ff15a2="" className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <h5 data-v-c7ff15a2="" className="live-preview">
            Live Preview
          </h5>
          <bills-100-template data-v-c7ff15a2="" template-id="3" bill-type="FUEL_RECEIPT" preview-data='{"cinSelected":null,"logoSelected":"1","fuel_station_name":"","fuel_address":"","fuel_rate":"","date":"2023-01-29T19:01:25.951Z","time":"0:31","customer_name":"","v_number":"","v_type":null,"payment_method":null,"total":"","cin":"M43010GH195260","email":"","invoice_id":"0505","telNo":"638072","fccId":"6912","fccNo":"30","nozzleNo":"4","filename":"Fuel Bill Template 3","mode":"EMAIL","mobile":"","density":"","dealer_name":""}' vce-ready="">
            <div id="app">
              <div id="app">
                <div></div>
                <div>
                  <div data-v-6c875dfd="" className="newbody">
                    <div data-v-6c875dfd="" className="background">
                      <img data-v-6c875dfd="" src="https://bill-generator-assets.s3.ap-south-1.amazonaws.com/side-logo.png" alt="Bank Logo" className="sidelogo1" />
                      <img data-v-6c875dfd="" src="https://bill-generator-assets.s3.ap-south-1.amazonaws.com/side-logo.png" alt="Bank Logo" className="sidelogo2" />
                      <img data-v-6c875dfd="" src="https://bill-generator-assets.s3.ap-south-1.amazonaws.com/Bharat-grayscale.png" alt="Logo" className="logo1" />
                      <p data-v-6c875dfd="" className="top">
                        WELCOME!!!
                      </p>
                      <p data-v-6c875dfd="" className="top" style={{ margin: "4px" }}></p>
                      <p data-v-6c875dfd="" className="top"></p>
                      <div data-v-6c875dfd="" className="table1">
                        <div data-v-6c875dfd="" className="table-element">
                          <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                            Receipt No.: 0505
                          </p>
                        </div>
                      </div>
                      <div data-v-6c875dfd="" className="table2">
                        <div data-v-6c875dfd="" className="table-element">
                          <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                            PRODUCT:{" "}
                          </p>
                        </div>
                        <div data-v-6c875dfd="" className="table-element">
                          <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                            RATE/LTR: ₹{" "}
                          </p>
                        </div>
                        <div data-v-6c875dfd="" className="table-element">
                          <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                            AMOUNT: ₹{" "}
                          </p>
                        </div>
                        <div data-v-6c875dfd="" className="table-element">
                          <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                            VOLUME(LTR.): lt
                          </p>
                        </div>
                      </div>
                      <div data-v-6c875dfd="" className="table1">
                        <div data-v-6c875dfd="" className="table-element">
                          <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                            VEH TYPE:{" "}
                          </p>
                        </div>
                        <div data-v-6c875dfd="" className="table-element">
                          <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                            VEH NO:{" "}
                          </p>
                        </div>
                        <div data-v-6c875dfd="" className="table-element">
                          <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                            CUSTOMER NAME:{" "}
                          </p>
                        </div>
                      </div>
                      <div data-v-6c875dfd="" className="table-element">
                        <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                          Date: 30 Jan 2023
                        </p>
                        <p data-v-6c875dfd=""> Time: 0:31</p>
                      </div>
                      <div data-v-6c875dfd="" className="table-element">
                        <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                          MODE:{" "}
                        </p>
                      </div>
                      <p data-v-6c875dfd="" className="bottom">
                        SAVE FUEL YAANI SAVE MONEY !! THANKS FOR FUELLING WITH US. YOU CAN NOW CALL US ON 1800 226344 (TOLL-FREE) FOR QUERIES/COMPLAINTS.
                      </p>
                    </div>
                  </div>
                </div>
                <footer>
                  <div className="container">
                    <div className="row"></div>
                  </div>
                </footer>
              </div>
            </div>
          </bills-100-template>
        </div>
      </div>
    </div>
  );
}

export default FuelBill;
