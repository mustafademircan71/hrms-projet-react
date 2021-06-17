import { Label, Form, Button, Grid, TextArea, Dropdown, Card,Table} from "semantic-ui-react";
import React, { useState, useEffect } from "react";
import JobPostionService from "../services/jobPostionService";
import CityService from "../services/cities";
import * as Yup from "yup";
import JobAdvertService from "../services/jobAdvertService";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";
import WorkingTypeService from "../services/workingTypeService";
import WorkingTimeService from "../services/workingTimeService";
import EmployerService from "../services/employerService";

export default function NewJobAdvert() {
  let jobAdvertService = new JobAdvertService();
  const validationSchema = Yup.object().shape({
    jobDescription: Yup.string().required("Bu Alan Boş Bırakılamaz"),
    maxPay: Yup.number().required("Bu Alan Boş Bırakılamaz").min(1),
    minPay: Yup.number().required("Bu Alan Boş Bırakılamaz").min(0),
    openPostion: Yup.number().required("Bu Alan Boş Bırakılamaz").min(1),
    releaseDate: Yup.date().nullable().required("Bu Alan Boş Bırakılamaz"),
    deadlineDate: Yup.date().nullable().required("Bu Alan Boş Bırakılamaz"),
    jobPositionId: Yup.string().required("Bu Alan Boş Bırakaılamaz"),
    cityId: Yup.string().required("Bu Alan Boş Bırakaılamaz"),
    //workingTypeId:Yup().string().required("Bu Alan Boş Bırakılamaz"),
    //workingTimeId:Yup().string().required("Bu Alan Boş Bırakılamaz")
  });


const history=useHistory()

  const formik = useFormik({
    initialValues: {
      jobDescription: "",
      maxPay: "",
      minPay: "",
      openPostion: "",
      releaseDate: "",
      deadlineDate: "",
      jobPostionId: "",
      cityId: "",
      workingTypeId:"",
      workingTimeId:"",
      employerId:""
    },
    valid:validationSchema,
    onSubmit:(values)=>{
        values.isActive=true
        values.employerId=1
        jobAdvertService.add(values).then(result=>console.log(result.data.data))
        history.push("/")
    }
  });
 



  const [jobPostions, setjobPostions] = useState([]);
  const [cities, setcities] = useState([]);
  const [workingTypes, setworkingTypes] = useState([])
  const [workingTimes, setworkingTimes] = useState([])
  const [employers, setemployers] = useState([])
  useEffect(() => {
    let jobPostionService = new JobPostionService();
    let cityService = new CityService();
    let workingTypeService=new WorkingTypeService();
    let workingTimeService=new WorkingTimeService();
    let employerService=new EmployerService()

    jobPostionService.getJobPostions().then((result) => setjobPostions(result.data.data));
    cityService.getCity().then((result) => setcities(result.data.data));
    workingTypeService.getWorkingTypes().then(result=>setworkingTypes(result.data.data))
    workingTimeService.getWorkingTimes().then(result=>setworkingTimes(result.data.data))
    employerService.getEmployers().then(result=>setemployers(result.data.data))
  }, []);
  const selectJobPostion = jobPostions.map((jobPostion, index) => ({
    key: index,
    text: jobPostion.positionName,
    value: jobPostion.jobPostionId,
  }));
  const selectCity = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.cityId,
  }));
  const selectWorkingType=workingTypes.map((workingType,index)=>({
    key:index,
    text:workingType.workingTypeName,
    value:workingType.workingTypeId,
  }))
  const selectWorkingTime=workingTimes.map((workingTime,index)=>({
    key:index,
    text:workingTime.workingTimeName,
    value:workingTime.workingTimeId,
  }))
  const handleChangeSemantic = (value, fieldName) => {
    formik.setFieldValue(fieldName, value);
  };

  return (
    <div>
    <Card fluid>
      <Card.Content header="Yeni İlan Ekle">
            <Form onSubmit={formik.handleSubmit}>
              <Form.Field>
                <label>Posizyon</label>
                <Dropdown
                  clearable
                  item
                  placeholder="İş Pozisyonu"
                  search
                  selection
                  onChange={(event,data)=>
                    handleChangeSemantic(data.value,"jobPostionId")
                  }
                  onBlur={formik.onBlur}
                  id="jobPostionId"
                  value={formik.values.jobPostionId}
                  options={selectJobPostion}
                />
                {formik.errors.jobPostionId&&formik.touched.jobPostionId&&(
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.jobPostionId}
                  </div>
                )}
              </Form.Field>
              <Form.Field>
                <Label>Şehir</Label>
                <Dropdown
                  clearable
                  item
                  placeholder="Şehir"
                  search
                  selection
                  onChange={(event,data)=>
                  handleChangeSemantic(data.value,"cityId")
                }
                onBlur={formik.onBlur}
                id="cityId"
                options={selectCity}
                />
                {formik.errors.cityId&&formik.touched.cityId&&(
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.cityId}
                  </div>
                )}
              </Form.Field>
              <Form.Field>
                <Label>Çalışma Şekli</Label>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Şekli"
                  search
                  selection
                  onChange={(event,data)=>
                  handleChangeSemantic(data.value,"workingTypeId")
                }
                onBlur={formik.onBlur}
                id="workingTypeId"
                options={selectWorkingType}
                />
                {formik.errors.workingTypeId&&formik.touched.workingTypeId&&(
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.workingTypeId}
                  </div>
                )}
              </Form.Field>
              <Form.Field>
                <Label>Çalışma Zamanı</Label>
                <Dropdown
                  clearable
                  item
                  placeholder="Çalışma Şekli"
                  search
                  selection
                  onChange={(event,data)=>
                  handleChangeSemantic(data.value,"workingTimeId")
                }
                onBlur={formik.onBlur}
                id="workingTimeId"
                options={selectWorkingTime}
                />
                {formik.errors.workingTimeId&&formik.touched.workingTimeId&&(
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.workingTimeId}
                  </div>
                )}
              </Form.Field>
              <Grid>
                <Grid.Column width={8}>
                <label>Min Ücret</label>
                <input
                  type="number"
                  placeholder="Min Ücret"
                  value={formik.values.minPay}
                  name="minPay"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                  {formik.errors.minPay&&formik.touched.minPay&&(
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.minPay}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label>Max Ücret</label>
                <input
                  type="number"
                  placeholder="Max Ücret"
                  value={formik.values.maxPay}
                  name="maxPay"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                  {formik.errors.maxPay&&formik.touched.maxPay&&(
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.maxPay}
                  </div>
                )}
                </Grid.Column>
              </Grid>
              <Grid>
                <Grid.Column width={8}>
                <label>Yayın Tarihi</label>
                <input
                  type="date"
                  error={Boolean(formik.errors.releaseDate)}
                  onChange={formik.handleChange}
                  value={formik.values.releaseDate}
                  onBlur={formik.handleBlur}
                  name="releaseDate"
                  placeholder="Yayın Tarihi"
                />
                  {formik.errors.releaseDate&&formik.touched.releaseDate&&(
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.releaseDate}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label>Son Başvuru Tarihi </label>
                <input
                  type="date"
                  error={Boolean(formik.errors.deadlineDate)}
                  onChange={formik.handleChange}
                  value={formik.values.deadlineDate}
                  onBlur={formik.handleBlur}
                  name="deadlineDate"
                  placeholder="Son Başvuru Tarihi"
                />
                  {formik.errors.deadlineDate&&formik.touched.deadlineDate&&(
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.deadlineDate}
                  </div>
                )}
                </Grid.Column>
              </Grid>
              <Form.Field>
              <label>Açık Posizyon</label>
                <input
                  type="number"
                  placeholder="Açık Pozisyon"
                  value={formik.values.openPostion}
                  name="openPostion"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                  {formik.errors.openPostion&&formik.touched.openPostion&&(
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.openPostion}
                  </div>
                )}
              </Form.Field>
              <Form.Field>
                <label>Açıklama</label>
                <TextArea
                  placeholder="Açıklama"
                  error={Boolean(formik.errors.jobDescription).toString()}
                  value={formik.values.jobDescription}
                  name="jobDescription"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.jobDescription&&formik.touched.jobDescription&&(
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.jobDescription}
                  </div>
                )}
              </Form.Field>
              <Form.Field>
                  <Button
                    content="Ekle"
                    labelPosition="left"
                    icon="add"
                    positive
                    type="submit"
                  />
              </Form.Field>

            </Form>
      </Card.Content>
    </Card>
</div>
  );
}
