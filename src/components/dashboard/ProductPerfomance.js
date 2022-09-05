import React from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
} from "@mui/material";
import BaseCard from "../baseCard/BaseCard";


const itemPerfomance = ({agent}) => {

  return (
    <BaseCard title="All agent">
      <Table
        aria-label="simple table"
        sx={{
          mt: 3,
          whiteSpace: "nowrap",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Name
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
               Contact 
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
                Address
              </Typography>
            </TableCell>
            <TableCell>
              <Typography color="textSecondary" variant="h6">
              Sale
              </Typography>
            </TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {agent.map((item) => (
            <TableRow key={item._id}>
              <TableCell>
                <Typography
                  sx={{
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {item.name}
                </Typography>
              </TableCell>
              <TableCell>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "600",
                      }}
                    >
                      {item.email}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      {item.phone}
                    </Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell>
                <Typography color="textSecondary" variant="h6">
                  {item.address}
                </Typography>
              </TableCell>
              <TableCell>
              <Typography color="textSecondary" variant="h6">
                  {item.sales}
                </Typography>
              </TableCell>
         
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </BaseCard>
  )
}



export default itemPerfomance;



