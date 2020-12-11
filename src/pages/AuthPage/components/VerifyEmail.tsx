import React, {useEffect, useState} from "react"
import {Link, useLocation} from "react-router-dom"
import {Result, Spin} from "antd"

import {userApi} from "services/api"

import {Block} from "components"

import "./VerifyEmail.scss"

const renderText = (verified: boolean, hash: string) => {
  if (!hash) {
    return (
      <Result
        status="info"
        title="Check your email!"
        subTitle="We have sent an email to you. Click the link to verify your email"
      />
    )
  }
  if (verified) {
    return (
      <Result
        status="success"
        title="Done!"
        subTitle="Account confirmed successfully"
        extra={<Link to="/signin">Sign In</Link>}
      />
    )
  } else {
    return (
      <Result
        status="error"
        title="Error!"
        subTitle="Something gone wrong, Please try again"
        extra={<Link to="/signup">Back</Link>}
      />
    )
  }
}

const VerifyEmail = () => {
  const location = useLocation()
  const hash = location.search

  const [verified, setVerified] = useState(false)
  const [checking, setChecking] = useState(!!hash)

  useEffect(() => {
    if (hash) {
      userApi
        .verifyEmail(hash)
        .then(() => {
          setVerified(true)
        })
        .catch(() => {
          setVerified(false)
        })
        .finally(() => {
          setChecking(false)
        })
    }
  }, [hash])

  return (
    <div className="verify-email">
      {!checking ? (
        <Block>{renderText(verified, hash)}</Block>
      ) : (
        <div className="verify-email--loading">
          <Spin size="large" />
        </div>
      )}
    </div>
  )
}

export default VerifyEmail
