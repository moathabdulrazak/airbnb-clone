'use client'

import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useCallback, useState } from 'react'
import React from 'react'
import { Toast, toast } from 'react-hot-toast'
import { SafeReservation, SafeUser } from '../types'
import Heading from "../components/Heading"
import Container from '../components/Container'
import ListingCard from '../components/listings/ListingCard'

interface reservationsClientProps{
  reservations: SafeReservation[];
  currentUser?: SafeUser | null
}


const reservationsClient: React.FC<reservationsClientProps> = ({
  reservations,
  currentUser
}) => {
  const router = useRouter();
  const [deletingId, setDeletingId ] = useState('')

  const onCancel = useCallback((id: string) => {
   setDeletingId(id) 


   axios.delete(`/api.reservations/${id}`)
   .then(() => {
    toast.success('Reservation canceled')
    router.refresh()
   })
   .catch(() => {
    toast.error('Something went wrong')
   })
   .finally(() => {
    setDeletingId('')
   })
  }, [router])


  return (
    <Container>
      <Heading
      title="Reservations"
      subtile="Bookings on your properties"
      />

    </Container>
  )
}

export default reservationsClient