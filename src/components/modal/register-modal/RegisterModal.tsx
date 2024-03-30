import React from 'react'
import { ModalProps } from 'antd'
import { CustomButton, CustomModal } from '@/components'

function RegisterModal(registerModalProps: ModalProps) {

    return (
        <CustomModal {...registerModalProps} footer={false}>
            <form className='grid pt-8'>
                <CustomButton>
                    Register
                </CustomButton>
                <hr className='my-4 ' />
            </form>
            <CustomButton className='bg-red-600 text-white w-full' >
                Google
            </CustomButton>
        </CustomModal>
    )
}

export default RegisterModal