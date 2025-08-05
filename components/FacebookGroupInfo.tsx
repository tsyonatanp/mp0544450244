'use client'

import React from 'react'
import { FaFacebook } from 'react-icons/fa'

interface FacebookGroupInfoProps {
  groupId: string
  groupName: string
  groupUrl: string
}

const FacebookGroupInfo: React.FC<FacebookGroupInfoProps> = ({ groupId, groupName, groupUrl }) => {
  return (
    <a
      href={groupUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 cursor-pointer"
    >
      <FaFacebook className="text-xl" />
      {groupName}
    </a>
  )
}

export default FacebookGroupInfo 