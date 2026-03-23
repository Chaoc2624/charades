import { Link, useParams } from '@tanstack/react-router'
import { t } from '../data/i18n'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const { lang } = useParams({ strict: false }) as { lang: string }

  const allItems: BreadcrumbItem[] = [
    { label: t(lang).home, href: `/${lang}` },
    ...items,
  ]

  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol className="breadcrumb-list" itemScope itemType="https://schema.org/BreadcrumbList">
        {allItems.map((item, i) => (
          <li
            key={i}
            className="breadcrumb-item"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            {item.href && i < allItems.length - 1 ? (
              <Link to={item.href} itemProp="item">
                <span itemProp="name">{item.label}</span>
              </Link>
            ) : (
              <span itemProp="name" aria-current={i === allItems.length - 1 ? 'page' : undefined}>
                {item.label}
              </span>
            )}
            <meta itemProp="position" content={String(i + 1)} />
            {i < allItems.length - 1 && (
              <span className="breadcrumb-sep" aria-hidden="true">/</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
