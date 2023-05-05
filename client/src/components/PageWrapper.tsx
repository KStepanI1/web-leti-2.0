
import React from 'react'
import PageHeader, { PageHeaderProps } from './PageHeader'
import { generateClassName } from '../helpers/generateClassName'
import { BreadCrumbsType } from './BreadCrumbs'

interface PageWrapperProps {
    title: string
    breadCrumbs?: BreadCrumbsType
    pageHeaderProps?: Omit<PageHeaderProps, 'title' | 'breadCrumbs'>
    children?: React.ReactNode
}

const MAIN_CLASSNAME = 'page-wrapper'

function PageWrapper({ title, pageHeaderProps, breadCrumbs, children }: PageWrapperProps) {
    const ClassName = generateClassName(MAIN_CLASSNAME)
    const ContentClassName = generateClassName(MAIN_CLASSNAME + '__content')

    return (
    <div className={ClassName}>
        <PageHeader title={title} breadCrumbs={breadCrumbs} {...pageHeaderProps} />
        <div className={ContentClassName}>
            {children}
        </div>
    </div>
  )
}

export default PageWrapper