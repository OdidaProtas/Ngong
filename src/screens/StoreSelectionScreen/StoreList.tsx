import StoreFrontIcon from "@mui/icons-material/Storefront";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { useContext, useEffect } from "react";
import { useHistory, useParams, useRouteMatch } from "react-router";
import TablesSkeleton from "../../components/SharedComponents/TablesSkeleton/TablesSkeleton";
import { StateContext } from "../../state/appstate";
import TbFallBack from "./TbFallBack";

export default function StoreList() {
  const { push } = useHistory();
  const { url } = useRouteMatch();
  const { id }: any = useParams();

  const { myStores } = useContext(StateContext);

  useEffect(() => {
    if (myStores) {
      if (myStores.length < 1) {
        push(`/store-login/${id}`);
      }
    }
  }, [myStores]);

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Typography sx={{ mt: 5, mb: 2 }} variant="h5">
            Stores
          </Typography>
        </div>
        <div>
          <Button
            disableElevation
            size="small"
            variant="contained"
            sx={{ textTransform: "none", mt: 4.5 }}
            color="secondary"
            onClick={() => push(`/store-login/${id}/new`)}
          >
            Create a store
          </Button>
        </div>
      </div>

      <div>
        {myStores &&
          myStores.map((store: any, idx: any) => {
            const { name, id }: any = store;
            
            return (
              <Box
                onClick={() => push(`/admin/${id}`)}
                sx={{
                  mb: 3,
                  mt: 3,
                  backgroundColor: "#EDF6F9",
                  p: 1,
                  borderRadius: "4px",
                  cursor: "pointer",
                  display: "flex",
                }}
                key={idx}
              >
                <Avatar sx={{ mt: 0.9 }}>
                  <StoreFrontIcon />
                </Avatar>
                <Box component="span">
                  <Typography sx={{ ml: 2 }} variant="h6">
                    {name}
                  </Typography>
                  <Typography variant="caption" sx={{ ml: 2 }}>
                    {name?.toLowerCase().split(" ").join("-")}.tokea.biz
                  </Typography>
                </Box>
              </Box>
            );
          })}
        {!myStores ? <TbFallBack /> : null}
      </div>
    </div>
  );
}
