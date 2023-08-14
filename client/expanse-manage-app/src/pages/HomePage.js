import React, { useState} from 'react'
import {Modal, Form, Input, Select, message}  from 'antd'
import axios from 'axios'
import Layout from '../components/Layout/Layout'
import Spinner from '../components/Spinner'

const HomePage = () => {
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)
  //form handling
  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem('user'))
      setLoading(true)
      await axios.post('/transeactions/add-transeaction', {...values, userid:user._id})
      setLoading(false)
      message.success('Transeaction was added successfuly')
      setShowModal(false)
    } catch(error) {
      setLoading(false)
      message.error('Failed to add transeaction')
    }
  }
  return (
    <Layout>
      {loading && <Spinner />}
    <div className='filters'>
      <div>range filters</div>
      <div>
        <button className='btn btn-primary'
         onClick={() => setShowModal(true)}
         >
          Add New
          </button>
      </div>
    </div>
    <div className='content'>
    <Modal title = 'Add Transeaction'
     open={showModal}
      onCancel={() => setShowModal(false)}
      footer={false}
      >
        <Form  Layout='vertical' onFinish={handleSubmit}>
          <Form.Item label='Amount' name='amount'>
            <Input type='number'/>
          </Form.Item>
          <Form.Item label='type' name='type'>
            <Select>
              <Select.Option value='income'>Income</Select.Option>
              <Select.Option value='expanse'>Expanse</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label='Category' name='category'>
            <Select>
              <Select.Option value='salary'>Salary</Select.Option>
              <Select.Option value='tip'>Tip</Select.Option>  
              <Select.Option value='project'>Project</Select.Option>  
              <Select.Option value='food'>Food</Select.Option>
              <Select.Option value='movie'>Movie</Select.Option>
              <Select.Option value='bills'>Bills</Select.Option>
              <Select.Option value='medical'>Medical</Select.Option>
              <Select.Option value='fee'>Fee</Select.Option>
              <Select.Option value='tax'>Tax</Select.Option>
              </Select>
          </Form.Item>
          <Form.Item label='Date' name='date'>
            <Input type='date'/>
          </Form.Item>
          <Form.Item label='Reference' name='reference'>
            <Input type='text'/>
          </Form.Item>
          <Form.Item label='Description' name='description'>
            <Input type='text'/>
          </Form.Item>
          <div className='d-flex justify-content-end'>
            <button type='submit' className='btn btn-primary'>
              {""}
               SAVE
               </button>
          </div>
        </Form>
    </Modal>
    </div>
  </Layout>
  )
}

export default HomePage