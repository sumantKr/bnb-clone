import { Modal, ModalProps } from 'antd'
import React from 'react'

function CustomModal(props: ModalProps) {
  const { destroyOnClose = true, classNames, centered = true, title = '' } = props
  return (
    <Modal title={title} centered={centered} classNames={{ content: "!p-4 !border-teal-100 !border-2", ...classNames }} destroyOnClose={destroyOnClose}  {...props} />
  )
}

export default CustomModal