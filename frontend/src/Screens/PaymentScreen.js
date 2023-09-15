import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import CheckoutStep from '../Components/CheckoutStep'
import { savePaymentMethod } from '../Actions/cartActions'

const PaymentScreen = () => {
  const FormContainer = ({ children }) => {
    return (
      <Container>
        <Row className='justify-content-md-center'>
          <Col xs={12} md={6}>
            {children}
          </Col>
        </Row>
      </Container>
    )
  }

  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const navigate = useNavigate()

  if (!shippingAddress) {
    navigate('/shipping')
  }

  const [paymentMethod, setPaymentMethod] = useState('PayPal')

  const dispatch = useDispatch()


  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod))
    navigate('/placeorder')
  }

  return (
    <FormContainer>
      <CheckoutStep step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as='legend'>Select Method</Form.Label>
        
        <Col>
          <Form.Check
            type='radio'
            label='PayPal or Credit Card'
            id='PayPal'
            name='paymentMethod'
            value='PayPal'
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></Form.Check>
        </Col>
        </Form.Group>
        <Button type='submit' className='primary mt-3'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentScreen
