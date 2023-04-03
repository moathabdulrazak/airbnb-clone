import getListingById from '@/app/actions/getListingById'
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import React from 'react'

interface IParms {
  listingId?: string;
}

const listingPage = async ({ params }: { params: IParms }) => {
  const listing = await getListingById(params);

  if(!listing){
    return(
      <ClientOnly>
        <EmptyState/>
      </ClientOnly>
    )
  }

  return (
    <div>
      {listing.title}
    </div>
  )
}

export default listingPage
