import { useForm, Controller } from "react-hook-form";
import './App.css'
import { Autocomplete, Box, Card, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, OutlinedInput, Radio, RadioGroup, Switch, TextField } from "@mui/material";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useEffect, useState } from "react";
import StockDetails from "./Components/StockDetails";

function App() {
  const { register,
    handleSubmit,
    reset,
    setValue,
    control,
    watch,
    formState: { errors } } = useForm();


  const [productValue, setProductValue] = useState({
    category:"",
    activeOrUnactive:""
  })

  const addProductsHandler = (data) => {
    console.log(data)
    reset()
  }

  const formValuesData = watch();
  console.log(formValuesData)

  useEffect(() => {
    setValue('description', productValue)
  }, [productValue])

  return (
    <>
      <Box className="container">
        <form onSubmit={handleSubmit(addProductsHandler)}>
          <Box className="container d-flex justify-content-between mt-4">
            <Box>
              <h2>Add New Product</h2>
              <p><b>Dashboard</b> / <b>Products</b> / <span className="fw-medium text-secondary">Add New Product</span></p>
            </Box>
            <Box>
              <button className="btn btn-light fw-medium">Back To Product</button>
            </Box>
          </Box>
          <Grid container spacing={9}>
            <Grid item md={8}>
              <Card sx={{ padding: 2 }}>
                <h4>Product Information</h4>
                <Grid container spacing={2}>
                  <Grid item md={6}>
                    <h6 className="mt-3">Title</h6>
                    <FormControl>
                <OutlinedInput
                  color='success'
                  size='small'
                  placeholder="Enter Product Title" 
                      {...register("name", { required: { value: true, message: "This Is A Required Field" } })}
                  />
              </FormControl>
                   <br /> {errors.name && <span className="text-danger">{errors.name.message}</span>}
                  </Grid>
                  <Grid item md={6}>
                    <h6 className="mt-3">Product Category</h6>
                    <Controller
                      name="category"
                      control={control}
                      render={({ field }) => (
                        <Autocomplete
                        {...field}
                          disablePortal
                          onChange={(e, value) => {
                            field.onChange(value.label);
                          }}
                          options={[
                            { label: "Dairy Bread And Eggs", value: "label 1" },
                            { label: "Snacks And Munchies", value: "label 2" }
                          ]}
                          size="small"
                          fullWidth
                          {...register}
                          renderInput={(params) => <TextField {...params} label="Category" />}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item md={6}>
                    <h6 className="mt-3">Weight</h6>
                    <FormControl>
                <OutlinedInput
                  color='success'
                  size='small'
                  placeholder="Enter Product Title" 
                      {...register("weight", { required: { value: true, message: "This Is Also A Required Field" } })}
                  />
              </FormControl>
                   <br /> {errors.weight && <span className="text-danger">{errors.weight.message}</span>}
                  </Grid>
                  <Grid item md={6}>
                    <h6 className="mt-3">Units</h6>
                    <Controller
                      name="category"
                      control={control}
                      render={({ field }) => (
                        <Autocomplete
                          disablePortal
                          onChange={(e, value) => {
                            field.onChange(value.label);
                          }}
                          options={[
                            { label: "Select Units", value: "label 1" },
                            { label: "1", value: "label 2" },
                            { label: "2", value: "label 3" },
                            { label: "3", value: "label 4" }
                          ]}
                          size="small"
                          fullWidth
                          {...register}
                          renderInput={(params) => <TextField {...params} label="Select Category" />}
                        />
                      )}
                    />

                  </Grid>
                  <Grid item xs={12}>
                    <ReactQuill className="mt-3" theme="snow" value={productValue} onChange={setProductValue} />
                  </Grid>
                </Grid>
              </Card>
            </Grid>

            <Grid item md={4}>
<StockDetails control={control} formValuesData={formValuesData} />  {/* Passing "control" As A Prop To Child stockDetails file */}
            </Grid>

          </Grid>
        </form>
      </Box>
    </>
  )
}

export default App
