import Agent from '@/components/Agent'
import React from 'react'

const page = () => {
  return (
    <>
      <h3>Interview generation</h3>

      <Agent
        userName="You"
        userId="user1"
        // profileImage=
        // userName={user?.name!}
        // userId={user?.id}
        // profileImage={user?.profileURL}
        type="generate"
      />
    </>

  )
}

export default page