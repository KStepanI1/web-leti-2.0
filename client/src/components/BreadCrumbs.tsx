import { Link } from 'react-router-dom'
import { generateClassName } from '../helpers/generateClassName'
import Icon from './Icon'

export type BreadCrumbType = {
    path?: string
    name: string    
}

export type BreadCrumbsType = BreadCrumbType[]

interface BreadCrumbsProps {
    title: string
    breadCrumbs?: BreadCrumbsType
}

const MAIN_CLASSNAME = 'breadcrumbs'

function BreadCrumbs({ title, breadCrumbs }: BreadCrumbsProps) {
    const ClassName = generateClassName(MAIN_CLASSNAME)
    const CrumbClassName = generateClassName(MAIN_CLASSNAME + '__crumb')
    const TitleClassName = generateClassName(MAIN_CLASSNAME + '__title')

  return (
    <nav className={ClassName}>
        {breadCrumbs?.map(({path, name}) => (
            <>
                {path ? <Link className={CrumbClassName} key={path} to={path}>
                    {name}
                </Link>
                : <h3 className={CrumbClassName} key={name}>{name}</h3>}
                <Icon name='ArrowRight' key={`${name}-icon`} />
            </>
        ))}
        <h2 className={TitleClassName}>{title}</h2>
    </nav>
  )
}

export default BreadCrumbs