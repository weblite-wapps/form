// modules
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
// components
import FieldBox from './components/fieldBox'
import Button from '../button/button'
import SearchField from '../searchField/searchField'

const Create = () => (
  <div>
    <FieldBox mode="DEFAULTS" />
    <FieldBox mode="DIVIDER" />
    <FieldBox mode="COVER" />

    <SearchField onChange={console.log} />

    <center style={{ marginBottom: 16 }}>
      <Button text="ذخیره" color="blue" />
      <Button text="پیش نمایش" color="gray" />
      <Button text="افزودن مورد" color="yellow" variant="plus" />
    </center>

    <center style={{ marginBottom: 16 }}>
      <Button text="ارسال جدید" color="blue" />
      <Button text="خروجی اکسل" color="green" />
      <Button text="غیرفعال سازی" color="gray" />
    </center>
  </div>
)

export default Create
