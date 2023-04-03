import { Box, Grid, Typography } from "@mui/material";
import { transactions } from './transactions';
import { userInfo } from './userInfo';
import UserProfileSection  from "./UserProfileSection";
import AddressSection  from "./AddressSection";
import PaymentSection  from "./PaymentSection";
import LoginSection  from "./LoginSection";
import TransactionsTable  from "./TransactionsTable";
import EmailPasswordSection  from "./EmailPasswordSection";
import React from "react";
import {useAppSelector} from "../../redux/hooks";

const Dashboard = () => {
	//const userInfo = useAppSelector(state => state.userInfo)
  return (
		<Box mb={4} mt={0}>
		  <Box sx={{ }} pb={1} pt={1}>
			<Grid container spacing={2}>
			  <Grid item xs={12} sm={12}>
				<Typography variant="h4" align="center" sx={{ 
				  fontWeight: 'bold',
				  color: '#2C3E50',
				  letterSpacing: '1px',
				  textTransform: 'uppercase',
				  marginBottom: '15px'
				}}>
				  User Dashboard
				</Typography>
			  </Grid>
			  <Grid item xs={12} sm={6} sx={{margin: '2'}}>
				<UserProfileSection userInfo={userInfo}/>
			  </Grid>
			  <Grid item xs={12} sm={6} sx={{margin: '2'}}>
				<AddressSection userInfo={userInfo}/>
			  </Grid>
			</Grid>
			<Grid container spacing={2}>
			  <Grid item xs={12} sm={6} sx={{margin: '2'}}>
				<LoginSection userInfo={userInfo}/>
			  </Grid>
			  <Grid item xs={12} sm={6} sx={{margin: '2'}}>
				<PaymentSection userInfo={userInfo} />
			  </Grid>
			</Grid>
			<Grid container spacing={2}>
			  <Grid item xs={12} sm={3} sx={{}}>
			  </Grid>
			  <Grid item xs={12} sm={6} sx={{margin: '2'}}>
				<EmailPasswordSection userInfo={userInfo}/>
			  </Grid>
			  <Grid item xs={12} sm={3} sx={{}}>
			  </Grid>
			</Grid>
			<Grid container spacing={2}>
			  <Grid item xs={12} sm={12} sx={{margin: '2'}}>
				<TransactionsTable transactions={transactions} />
			  </Grid>
			</Grid>
		  </Box>
		</Box>


  );
};

export default Dashboard;

