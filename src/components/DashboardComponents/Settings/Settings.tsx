import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useAxiosRequest } from "../../../hooks";
import { AuthContext, axiosInstance } from "../../../state";
import { StateContext } from "../../../state/appstate";

export default function Settings() {
  const param: any = useParams();
  const {
    authState: {
      user: { id },
    },
  }: any = useContext(AuthContext);

  const { myStores, stateDispatch }: any = useContext(StateContext);

  const [loading, setLoading] = useState(false);

  const { push } = useHistory();
  const handleDelete = () => {
    setLoading(true);
    axiosInstance
      .delete(`/stores/${param.id}`)
      .then((res) => {
        const store = myStores.filter((store: any) => store.id === param.id)[0];
        let newstores = myStores;
        const index = newstores.indexOf(store);
        if (index > -1) {
          newstores.splice(index, 1);
        }
        stateDispatch({ type: "ADD_MY_STORES", payload: newstores });
        setLoading(false);
        push(`/store-login/${id}`);
      })
      .catch((e) => setLoading(false));
  };
  return (
    <div>
      settings
      <br />
      {loading ? (
        `Deleting...`
      ) : (
        <button onClick={handleDelete} style={{ marginTop: 100 }}>
          delete store
        </button>
      )}
    </div>
  );
}
