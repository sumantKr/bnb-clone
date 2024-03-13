import React from 'react'
import CustomModal from '../CustomModal'
import { ModalProps } from 'antd'
import CustomButton from '@/components/custom-button/CustomButton'

function RegisterModal(registerModalProps: ModalProps) {
    return (
        <CustomModal {...registerModalProps}>
            <form>
                <CustomButton>
                    Register
                </CustomButton>
            </form>
        </CustomModal>
    )
}

export default RegisterModal