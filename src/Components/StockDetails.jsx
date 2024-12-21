import React from 'react'
import { Controller } from 'react-hook-form'
import { Box, Card, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, OutlinedInput, Radio, RadioGroup, Switch, TextField } from '@mui/material'
import ExpireyForm from './ExpireyForm';



const StockDetails = (props) => {
  const { control, formValuesData } = props;
  console.log(formValuesData)
  return (
    <>
      <Grid container spacing={4}>
        <Grid item>
          <Card sx={{ padding: 2 }}>
            <FormGroup>
              <FormControlLabel
                control={<Switch defaultValue={false} />} label="In Stock" color="danger" />
            </FormGroup>
            <Box className="mt-3">
              <h6>Product Code</h6>
              <FormControl>
                <OutlinedInput
                  color='success'
                  size='small'
                  placeholder="Enter Product Title" />
              </FormControl>
            </Box>
            <Box className="mt-3">
              <h6>Product SKU</h6>
              <FormControl>
                <OutlinedInput
                  color='success'
                  size='small'
                  placeholder="Enter Product Title" />
              </FormControl>
            </Box>
            <Controller
              name='activeOrUnactive'
              control={control}
              render={({ field }) => (
                <FormControl className="mt-3">
                  <FormLabel id="demo-row-radio-buttons-group-label">Status</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      {...field}
                      value="true"
                      control={<Radio />}
                      label="Active" />
                    <FormControlLabel
                      {...field}
                      value="false"
                      control={<Radio />}
                      label="Disabled"
                      color="success" />
                  </RadioGroup>
                </FormControl>

              )}
            >
            </Controller>

            {/* Adding A Condition For Expire Product */}
            {/*Using nested ternary operator to ensure that the
             value displays only when there is any box filled */}


            {formValuesData?.activeOrUnactive ? (
              formValuesData?.activeOrUnactive === "true" ? (

                <Box>
                  <Controller
                    name="expire-information"
                    control={control}
                    render={({ field }) => (
                      <FormControl>
                        <OutlinedInput
                          color='success'
                          size='small'
                          placeholder="Enter Expiry Date" />
                      </FormControl>
                    )}
                  >
                  </Controller>
                </Box>
              ) : (
                <FormControl>
                  <OutlinedInput color='success' size='small' placeholder="Please Enter Your Name" />
                </FormControl>
              )) : null}

          </Card>
          <Card className="mt-3" sx={{ padding: 2 }}>
            <h5>Product Price</h5>
            <Box className="mt-3">
              <h6>Regular Price</h6>
              <FormControl>
                <OutlinedInput
                  color='success'
                  size='small'
                  placeholder="$0.00" />
              </FormControl>
            </Box>
            <Box className="mt-3">
              <h6>Sale Price</h6>
              <OutlinedInput
                color='success'
                size='small'
                placeholder="$0.00" />
            </Box>

          </Card>
          <Card className="mt-3" sx={{ padding: 2 }}>
            <h5>Meta Data</h5>
            <Box className="mt-3">
              <h6>Meta Title</h6>
              <FormControl>
                <OutlinedInput
                  color='success'
                  size='small'
                  placeholder="Meta Data" />
              </FormControl>
            </Box>
            <Box className="mt-3">
              <h6>Meta Description</h6>
              <FormControl className='w-100'>
                <OutlinedInput
                  color='success'
                  size='small'
                  multiline
                  rows={3}
                  placeholder="Meta Description" />
              </FormControl>
            </Box>

          </Card>
          <button className="btn btn-success w-100 mt-3">Create Product</button>
        </Grid>
      </Grid>
    </>
  )
}

export default StockDetails
