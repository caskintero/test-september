import React, { useState } from "react";
import { Button } from "./Button";
import axios from "axios";

export const AddTask = ({ getTasks }) => {
    const [form, setform] = useState({
        title: "",
        description: "",
    });
    const [modal, setmodal] = useState(false);
    const handleSubmit = async () => {
        const response = await axios.post(
            `${import.meta.env.VITE_API_URL}/tasks`,
            form
        );
        console.log(response);

        if (response.data.status === "success") {
            getTasks();
            handleClose();
        }
    };
    const handleClose = () => {
        setmodal(false);
        setform({
            title: "",
            description: "",
        });
    };
    const getIsDisabled = () => {
        if (form.title === "" || form.title.length > 256) {
            return true;
        } else return false;
    };
    return (
        <div>
            <Button title="New Task" onClick={() => setmodal(!modal)}></Button>
            {modal && (
                <div
                    className="modal fade show d-block"
                    tabIndex="-1"
                    role="dialog"
                >
                    <div
                        className="modal-dialog"
                        role="document"
                        style={{ zIndex: 1050 }}
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Modal Title</h5>
                                <button
                                    type="button"
                                    className="close"
                                    onClick={handleClose}
                                >
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">
                                            Title{" "}
                                            <span className="text-danger">
                                                *
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="exampleFormControlInput1"
                                            placeholder="your title"
                                            onChange={(e) =>
                                                setform({
                                                    ...form,
                                                    title: e.target.value,
                                                })
                                            }
                                        />
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">
                                            Description
                                        </label>
                                        <textarea
                                            class="form-control"
                                            id="exampleFormControlTextarea1"
                                            rows="3"
                                            onChange={(e) =>
                                                setform({
                                                    ...form,
                                                    description: e.target.value,
                                                })
                                            }
                                        ></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className={`btn btn-primary`}
                                    onClick={() => handleSubmit()}
                                    disabled={getIsDisabled()}
                                >
                                    Save changes
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Background overlay */}
                    <div
                        className="modal-backdrop fade show z-0"
                        onClick={handleClose}
                    ></div>
                </div>
            )}
        </div>
    );
};
