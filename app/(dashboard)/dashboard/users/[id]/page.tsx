import React from 'react'

const Page = ({ params }: { params: { id: string}}) => {
const { id } = params;

  return (
    <div>User details page {id} </div>
  )
}

export default Page