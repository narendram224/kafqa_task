import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

const SkeltonItem = ({ count = 5 }) => {
    return (
        <SkeletonTheme color="#273640" highlightColor="#1b262d">
            <Skeleton count={count} />
        </SkeletonTheme>
    )
}

export default SkeltonItem
