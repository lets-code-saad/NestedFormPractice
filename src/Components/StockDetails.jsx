import React, { useState } from 'react'
import { Controller, useForm  } from 'react-hook-form'
import { Box, Card, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, OutlinedInput, Radio, RadioGroup, Switch, TextField } from '@mui/material'



const StockDetails = (props) => {
  const { setValue } = useForm();

  // Receiving Functions As Props
  const { control, register, formValuesData, errors } = props;

// Function to handle the status input
const [status, setStatus] = useState("")
const statusHandling = (event)=>{
  setStatus(event.target.value)
}

  // Functions to handle switch button

  const [inStock, setInStock] = useState(false)
  const handleChangeValue = (event) => {
    setInStock(event.target.checked)

  }

  return (
    <>
      <Grid container spacing={4}>
        <Grid item>
          <Card sx={{ padding: 2 }}>
            <FormGroup>
              <FormControlLabel
                control={<Switch 
                  onChange={handleChangeValue} 
                  defaultValue={false} />} 
                  label="In Stock" color="danger"
              />
            </FormGroup>
            {inStock && (
              <>
                <Box className="mt-3">
                  <h6>Product Code</h6>
                  <Controller
                      name="productCode"
                      control={control}
                      render={({ field }) => (
                        <FormControl>
                        <OutlinedInput
                        {...field}
                          color='success'
                          size='small'
                          placeholder="Enter Product Code"
                      {...register('productCode', { required: { value: true, message: "This is a required field" } })}
                          />
                  {errors.productCode && <span className="text-danger">{errors.productCode.message}</span>}
                      </FormControl>
                      )}
                    />

                </Box>
                <Box className="mt-3">
                  <h6>Product SKU</h6>
                  <FormControl>
                    <OutlinedInput
                      color='success'
                      size='small'
                      placeholder="Enter Product Title"
                      {...register("sku", { required: { value: true, message: "This Is A Required Field" } })}
                    />
                  {errors.sku && <span className='text-danger'>{errors.sku.message}</span>}
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
                        onChange={statusHandling}
                        >
                        <FormControlLabel
                          {...field}
                          value="true"
                          control={<Radio />}
                          label="Active"
                          {...register("trueValue", { required: { value: true, message: "Please Select Any Option" } })}
                        />
                        <FormControlLabel
                          {...field}
                          value="false"
                          control={<Radio />}
                          label="Disabled"
                          />
                      </RadioGroup>
                    </FormControl>

                  )}
                />

                {/* Adding A Condition For Expire Product */}
                {/*Using nested ternary operator to ensure that the
             value displays only when there is any box filled */}



                <Box>
                  {status === "true" && (
                    <Controller
                      name="manifacture-information"
                      control={control}
                      render={({ field }) => (
                        <FormControl>
                          <OutlinedInput
                            {...field}
                            color="success"
                            size="small"
                            placeholder="Please Enter Manufacture Date"
                          />
                        </FormControl>
                      )}
                    />
                  )}
                </Box>

                <Box>
                  {status === "false" && (
                    <Controller
                      name="expirey-information"
                      control={control}
                      render={({ field }) => (
                        <FormControl>
                          <OutlinedInput
                            {...field}
                            color="success"
                            size="small"
                            placeholder="Enter Expiry Date"
                          />
                        </FormControl>
                      )}
                    />
                  )}
                </Box>
              </>
            )}
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
