'use client'

import { useState } from 'react'
import Link from 'next/link'

import { Media } from '../../../_components/Media'

import classes from './index.module.scss'

export default function CartItem({ product, title, metaImage, qty, addItemToCart }) {
  const [quantity, setQuantity] = useState(qty)
  const decrementQty = () => {}
  const incrementQty = () => {}
  const enterQty = () => {}

  return (
    <li key={title} className={classes.item}>
      <Link href={`/products/${product.slug}`} className={classes.mediaWrapper}>
        {!metaImage && <span>No image</span>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media className={classes.media} imgClassName={classes.image} resource={metaImage} fill />
        )}
      </Link>
    </li>
  )
}
