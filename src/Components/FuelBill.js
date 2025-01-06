import React, { Component } from "react";
import "./FuelBill.css";
import { fuel_data } from "./Fueldata";

export default class FuelBill extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fuel_data: fuel_data,
      receipt_no: 5050,
      address: "",
      amount: "",
      mean: "4000",
      bills: [],
      pdf_view: false,
      sum_amount: 0,
      sum_ltrs: 0,
      month_mode: false,
      number_of_bills: "1",
      petrol_rate: "94.8",
      month: "2024-04",
    };
  }

  _switch_mode = () => {
    this.setState((prevState) => ({ month_mode: !prevState.month_mode }));
  };

  onChange = (e, id) => {
    this.setState({ [id]: e.target.value });
  };

  _generateRandomNumber = (from_num, to_num) => {
    return from_num + Math.round(Math.random() * (to_num - from_num));
  };

  _getTime = () => {
    let ran_time1 = `${this._generateRandomNumber(10, 22)}:${this._generateRandomNumber(10, 54)}:${this._generateRandomNumber(10, 54)}`;
    let [hour, min, sec] = ran_time1.split(":");
    min = parseInt(min) + parseInt(this._generateRandomNumber(1, 2));
    sec = parseInt(sec) + parseInt(this._generateRandomNumber(1, 2));
    let ran_time2 = `${hour}:${min}:${sec}`;
    min = parseInt(min) + parseInt(this._generateRandomNumber(3, 5));
    sec = parseInt(sec) + parseInt(this._generateRandomNumber(3, 5));
    let ran_time3 = `${hour}:${min}:${sec}`;
    return {
      time: ran_time3,
      txnSt: ran_time1,
      txnEnd: ran_time2,
    };
  };

  _generateAmountArray = (total_number_of_bills) => {
    let amount_arr = [],
      { mean } = this.state;
    mean = parseInt(mean);
    for (let i = 0; i < parseInt(total_number_of_bills / 2); i++) {
      let ei = total_number_of_bills - 1 - i;
      let diff = this._generateRandomNumber(0, 500);
      if (i % 2 == 0) {
        amount_arr[i] = mean - diff;
        amount_arr[ei] = mean + diff;
      } else {
        amount_arr[i] = mean + diff;
        amount_arr[ei] = mean - diff;
      }
    }
    if (total_number_of_bills % 2 !== 0) {
      amount_arr[parseInt(total_number_of_bills / 2)] = mean;
    }
    console.log(amount_arr);
    return amount_arr;
  };

  _generateFuelBills = () => {
    let { amount, fuel_data, sum_amount, sum_ltrs, mean } = this.state;
    if (mean === "" || mean === null || isNaN(mean) || mean.includes(".") || mean > 10000) {
      alert("Enter valid integer number in mean amount less than 10000");
      return;
    }
    mean = parseInt(mean);
    if (amount === "" || amount === null || isNaN(amount) || amount.includes(".") || amount > (mean * 365) - 1) {
      alert(`Enter valid integer number in total amount less than ${(mean * 365) - 1}`);
      return;
    }
    let total_number_of_bills = parseInt(amount / mean);
    let bills = [];
    let fuel_data_length = fuel_data.length;
    let skip_factor = parseInt((fuel_data_length - 1) / (total_number_of_bills - 1));
    let amount_arr = this._generateAmountArray(total_number_of_bills);
    let receipt_no = 2102709341; // starting txn number
    for (let i = 0; i < total_number_of_bills; i++) {
      let fuel_value = fuel_data[skip_factor * i];
      let times_obj = this._getTime();
      let txn_id = this._generateRandomNumber(receipt_no + 10000, receipt_no + 1000000);
      bills.push({
        amount: amount_arr[i].toFixed(2),
        date: new Date(fuel_value.date),
        time: times_obj.time,
        rate: fuel_value.rate,
        ltr: parseFloat(amount_arr[i] / fuel_value.rate).toFixed(2),
        bay_no: this._generateRandomNumber(1, 8),
        nozzle_no: this._generateRandomNumber(1, 4),
        product: "PETROL",
        paymode: "CASH",
        txn_id,
        hdfc_no: `D ${fuel_value.date.split("-")[1]}/${fuel_value.date.split("-")[0]}`,
        txnSt: times_obj.txnSt,
        txnEnd: times_obj.txnEnd,
      });
      sum_amount += amount_arr[i];
      sum_ltrs += parseFloat(amount_arr[i] / fuel_value.rate);
      receipt_no = txn_id;
    }
    this.setState({ bills, pdf_view: true, sum_amount, sum_ltrs: sum_ltrs.toFixed(2), total_number_of_bills });
  };

  _generateFuelBillsMonth = () => {
    let { amount, sum_amount, sum_ltrs, mean, number_of_bills, petrol_rate, month } = this.state;
    if (mean === "" || mean === null || isNaN(mean) || mean.includes(".") || mean > 50000) {
      alert("Enter valid integer number in mean amount less than 50000");
      return;
    }
    mean = parseInt(mean);
    if (number_of_bills === "" || number_of_bills === null || isNaN(number_of_bills) || number_of_bills.includes(".") || number_of_bills > 30) {
      alert(`Enter valid integer number in number of bills and less than 30`);
      return;
    }
    number_of_bills = parseInt(number_of_bills);
    if (petrol_rate === "" || petrol_rate === null || isNaN(petrol_rate)) {
      alert(`Enter valid float number in petrol rate`);
      return;
    }
    petrol_rate = parseFloat(petrol_rate);
    if (month === "" || month === null) {
      alert(`Enter valid month`);
      return;
    }
    let month_arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
      month_tenure = 30;
    if (month && month.includes("-")) {
      let month_number = parseInt(month.split("-")[1]) - 1;
      month_tenure = month_arr[month_number];
    }
    let total_number_of_bills = number_of_bills;
    let bills = [];
    console.log("month_tenure", month_tenure, "total_number_of_bills", total_number_of_bills);
    let skip_factor = total_number_of_bills > 1 ? parseInt((month_tenure - 1) / (total_number_of_bills - 1)) : 0;
    let amount_arr = this._generateAmountArray(total_number_of_bills);
    let receipt_no = 2102709341 + this._generateRandomNumber(1000, 2102709341); // starting txn number
    for (let i = 0; i < total_number_of_bills; i++) {
      console.log("month", month, "i", i, "skip_factor", skip_factor);
      let fuel_value = { date: new Date(new Date(month).getTime() + i * skip_factor * 60 * 60 * 24 * 1000).toISOString().split("T")[0], rate: petrol_rate };
      let times_obj = this._getTime();
      let txn_id = this._generateRandomNumber(receipt_no + 10000, receipt_no + 1000000);
      bills.push({
        amount: amount_arr[i].toFixed(2),
        date: new Date(fuel_value.date),
        time: times_obj.time,
        rate: fuel_value.rate,
        ltr: parseFloat(amount_arr[i] / fuel_value.rate).toFixed(2),
        bay_no: this._generateRandomNumber(1, 8),
        nozzle_no: this._generateRandomNumber(1, 4),
        product: "PETROL",
        paymode: "CASH",
        txn_id,
        hdfc_no: `D ${fuel_value.date.split("-")[1]}/${fuel_value.date.split("-")[0]}`,
        txnSt: times_obj.txnSt,
        txnEnd: times_obj.txnEnd,
      });
      sum_amount += amount_arr[i];
      sum_ltrs += parseFloat(amount_arr[i] / fuel_value.rate);
      receipt_no = txn_id;
    }
    this.setState({ bills, pdf_view: true, sum_amount, sum_ltrs: sum_ltrs.toFixed(2), total_number_of_bills });
  };

  _sanitizeFuelData = (fuel_data) => {
    // let { fuel_data } = this.state;
    let fy_fuel_data = [];
    for (let i = 0; i < fuel_data.length; i++) {
      if (new Date(fuel_data[i].date).getTime() >= new Date(`04-01-2024 00:00`).getTime()) {
        fy_fuel_data.push(fuel_data[i]);
      }
    }
    return JSON.stringify(fy_fuel_data);
  };

  componentDidMount() {
    // this._sanitizeFuelData();
  }

  render() {
    const { fuel_data, address, amount, mean, receipt_no, bills, pdf_view, total_number_of_bills, sum_amount, sum_ltrs, month_mode, number_of_bills, petrol_rate, month } = this.state;
    return (
      <div className="">
        {!pdf_view ? (
          <>
            <div data-v-c7ff15a2="" className="container">
              <h3 data-v-c7ff15a2="" className="head_title">
                <span data-v-c7ff15a2="" className="logo100">
                  Fuel
                </span>{" "}
                Bill{" "}
              </h3>
              <div data-v-c7ff15a2="" className="row">
                <div data-v-c7ff15a2="" className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                  {/* <h5 data-v-c7ff15a2="">Fuel Station Details</h5>
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
            </div> */}
                  {/* <fieldset data-v-c7ff15a2="" className="form-group" id="__BVID__69">
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
            </fieldset> */}
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
                        value={address}
                        onChange={(e) => this.onChange(e, "address")}
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
                    {/* <div data-v-c7ff15a2="" className="col-lg-6">
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
              </div> */}

                    {month_mode ? (
                      <>
                        <div data-v-c7ff15a2="" className="col-lg-6">
                          <fieldset data-v-c7ff15a2="" className="form-group" id="__BVID__75">
                            <legend tabIndex="-1" className="bv-no-focus-ring col-form-label pt-0" id="__BVID__75__BV_label_">
                              Mean Bill Amount *
                            </legend>
                            <div>
                              <input data-v-c7ff15a2="" onChange={(e) => this.onChange(e, "mean")} value={mean} type="text" placeholder="Total Mean Amount" className="form-control" id="__BVID__76" required="required" aria-required="true" />
                              <div data-v-c7ff15a2="" className="invalid-feedback">
                                {" "}
                                Mean Bill Amount is required
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        <div data-v-c7ff15a2="" className="col-lg-6">
                          <fieldset data-v-c7ff15a2="" className="form-group" id="__BVID__75">
                            <legend tabIndex="-1" className="bv-no-focus-ring col-form-label pt-0" id="__BVID__75__BV_label_">
                              Number of Bills *
                            </legend>
                            <div>
                              <input data-v-c7ff15a2="" onChange={(e) => this.onChange(e, "number_of_bills")} value={number_of_bills} type="text" placeholder="Number of Bills" className="form-control" id="__BVID__76" required="required" aria-required="true" />
                              <div data-v-c7ff15a2="" className="invalid-feedback">
                                {" "}
                                Number of Bills is required
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        <div data-v-c7ff15a2="" className="col-lg-6">
                          <fieldset data-v-c7ff15a2="" className="form-group" id="__BVID__75">
                            <legend tabIndex="-1" className="bv-no-focus-ring col-form-label pt-0" id="__BVID__75__BV_label_">
                              Petrol Rate *
                            </legend>
                            <div>
                              <input data-v-c7ff15a2="" onChange={(e) => this.onChange(e, "petrol_rate")} value={petrol_rate} type="text" placeholder="Petrol Rate" className="form-control" id="__BVID__76" required="required" aria-required="true" />
                              <div data-v-c7ff15a2="" className="invalid-feedback">
                                {" "}
                                Petrol Rate is required
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        <div data-v-c7ff15a2="" className="col-lg-6">
                          <fieldset data-v-c7ff15a2="" className="form-group" id="__BVID__75">
                            <legend tabIndex="-1" className="bv-no-focus-ring col-form-label pt-0" id="__BVID__75__BV_label_">
                              Select Month *
                            </legend>
                            <div>
                              <input data-v-c7ff15a2="" onChange={(e) => this.onChange(e, "month")} value={month} type="month" placeholder="month" className="form-control" id="__BVID__76" required="required" aria-required="true" />
                              <div data-v-c7ff15a2="" className="invalid-feedback">
                                {" "}
                                Month is required
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </>
                    ) : (
                      <>
                        <div data-v-c7ff15a2="" className="col-lg-6">
                          <fieldset data-v-c7ff15a2="" className="form-group" id="__BVID__75">
                            <legend tabIndex="-1" className="bv-no-focus-ring col-form-label pt-0" id="__BVID__75__BV_label_">
                              Total Amount *
                            </legend>
                            <div>
                              <input data-v-c7ff15a2="" onChange={(e) => this.onChange(e, "amount")} value={amount} type="text" placeholder="Total Amount" className="form-control" id="__BVID__76" required="required" aria-required="true" />
                              <div data-v-c7ff15a2="" className="invalid-feedback">
                                {" "}
                                Total Amount is required
                              </div>
                            </div>
                          </fieldset>
                        </div>
                        <div data-v-c7ff15a2="" className="col-lg-6">
                          <fieldset data-v-c7ff15a2="" className="form-group" id="__BVID__75">
                            <legend tabIndex="-1" className="bv-no-focus-ring col-form-label pt-0" id="__BVID__75__BV_label_">
                              Mean Bill Amount *
                            </legend>
                            <div>
                              <input data-v-c7ff15a2="" onChange={(e) => this.onChange(e, "mean")} value={mean} type="text" placeholder="Total Mean Amount" className="form-control" id="__BVID__76" required="required" aria-required="true" />
                              <div data-v-c7ff15a2="" className="invalid-feedback">
                                {" "}
                                Mean Bill Amount is required
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </>
                    )}
                  </div>
                  {/* <div data-v-c7ff15a2="" className="row">
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
            </div> */}
                  {/* <h5 data-v-c7ff15a2="">Customer Details</h5>
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
            </div> */}
                  <button onClick={!month_mode ? this._generateFuelBills : this._generateFuelBillsMonth} data-v-c7ff15a2="" type="submit" className="btn btn mb-0 btn-primary">
                    {" "}
                    Generate
                  </button>

                  <div className="" style={{ marginTop: 10 }}>
                    <button onClick={this._switch_mode} data-v-c7ff15a2="" type="" className="btn btn mb-0 btn-secondary">
                      {" "}
                      Switch to {month_mode ? "Financial Year" : "Month"} Mode
                    </button>
                  </div>

                  {/* <button data-v-c7ff15a2="" type="Clear" className="btn btn ml-3 mb-0 btn-primary">
              Clear
            </button> */}
                  {!month_mode ? (
                    <>
                      <div className="" style={{}}>
                        <div className="" style={{ fontWeight: 500, marginTop: "4em" }}>
                          Note:
                        </div>
                        <div className="">Bills are generated with deviation of 500 from the provided Mean Bill Amount</div>
                        <div className="" style={{ marginTop: "1em" }}>
                          For Best Results with even spread throughout the year -
                        </div>
                        <div className="">Divide Total Amount by 92 and use that as Mean Bill Amount rounded down</div>
                        <div className="">This will give bills with 4 days seperation between them</div>
                      </div>
                    </>
                  ) : null}

                  <div data-v-7e8502bc="" data-v-c7ff15a2="" className="creditsRemain">
                    {/* <span data-v-7e8502bc="">This bill generation is absolutely free.</span> */}
                    <br data-v-7e8502bc="" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="noprint">
              <div className="">Total Number of bills generated: {total_number_of_bills}</div>
              <div className="">Sum Amount: {sum_amount}</div>
              <div className="">Sum Liters: {sum_ltrs}</div>
              <button onClick={() => window.location.reload()} data-v-c7ff15a2="" type="" className="btn btn mb-0 btn-primary">
                {" "}
                Generate More
              </button>
            </div>

            {bills.map((bill) => (
              <div data-v-c7ff15a2="" className="" style={{ display: "inline-block", width: "260px", verticalAlign: "top" }}>
                {/* <h5 data-v-c7ff15a2="" className="live-preview">
              Live Preview
            </h5> */}
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
                            <p data-v-6c875dfd="" className="top">
                              BPCL
                            </p>
                            {address ? (
                              <>
                                <p data-v-6c875dfd="" className="top">
                                  {address}
                                </p>
                              </>
                            ) : (
                              <>
                                <p data-v-6c875dfd="" className="top">
                                  Enroute Sahay Filling Station
                                </p>
                                <p data-v-6c875dfd="" className="top">
                                  SEC-30, NH-08
                                </p>
                                <p data-v-6c875dfd="" className="top">
                                  DELHI-JAIPUR ROAD
                                </p>
                                <p data-v-6c875dfd="" className="top">
                                  Gurgaon
                                </p>
                              </>
                            )}
                            {/* <p data-v-6c875dfd="" className="top">BPCL</p> */}

                            <div data-v-6c875dfd="" className="table1">
                              <div data-v-6c875dfd="" className="table-element">
                                <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                                  Receipt No.: {bill.txn_id}
                                </p>
                              </div>
                            </div>
                            <div data-v-6c875dfd="" className="table2">
                              <div data-v-6c875dfd="" className="table-element">
                                <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                                  PRODUCT: {bill.product}
                                </p>
                              </div>
                              <div data-v-6c875dfd="" className="table-element">
                                <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                                  RATE/LTR: ₹ {bill.rate}
                                </p>
                              </div>
                              <div data-v-6c875dfd="" className="table-element">
                                <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                                  AMOUNT: ₹ {bill.amount}
                                </p>
                              </div>
                              <div data-v-6c875dfd="" className="table-element">
                                <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                                  VOLUME(LTR.): lt {bill.ltr}
                                </p>
                              </div>
                            </div>
                            <div data-v-6c875dfd="" className="table1">
                              <div data-v-6c875dfd="" className="table-element">
                                <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                                  BAY No: {bill.bay_no}
                                </p>
                              </div>
                              <div data-v-6c875dfd="" className="table-element">
                                <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                                  NOZZLE NO: {bill.nozzle_no}
                                </p>
                              </div>
                              <div data-v-6c875dfd="" className="table-element">
                                <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                                  TXN ID: {bill.txn_id}
                                </p>
                              </div>
                              <div data-v-6c875dfd="" className="table-element">
                                <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                                  TXN ST: {bill.txnSt}
                                </p>
                              </div>
                              <div data-v-6c875dfd="" className="table-element">
                                <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                                  TXN END: {bill.txnEnd}
                                </p>
                              </div>
                            </div>
                            <div data-v-6c875dfd="" className="table-element">
                              <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                                Date: {bill.date.toLocaleDateString()}
                              </p>
                              <p data-v-6c875dfd=""> Time: {bill.time}</p>
                            </div>
                            <div data-v-6c875dfd="" className="table-element">
                              <p data-v-6c875dfd="" style={{ margin: "4px" }}>
                                MODE: {bill.paymode}
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
            ))}
          </>
        )}
      </div>
    );
  }
}
