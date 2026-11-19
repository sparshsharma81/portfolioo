import { useEffect, useRef } from 'react'
import TitleBar from './TitleBar.jsx'
import './Lightbox.css'

// Full-size view of a project screenshot or diagram, in a native modal <dialog>.
export default function Lightbox({ image, onClose }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (image && !dialog.open) dialog.showModal()
    if (!image && dialog.open) dialog.close()
  }, [image])

  useEffect(() => {
    const dialog = dialogRef.current
    dialog.addEventListener('close', onClose)
    return () => dialog.removeEventListener('close', onClose)
  }, [onClose])

  const closeOnBackdrop = (e) => {
    if (e.target === dialogRef.current) dialogRef.current.close()
  }

  return (
    <dialog className="lb" ref={dialogRef} aria-label="Enlarged image" onClick={closeOnBackdrop}>
      <TitleBar title={image?.caption} dots={false}>
        <form method="dialog">
          <button className="lb-close">close</button>
        </form>
      </TitleBar>
      {image && <img src={image.src} alt={image.alt} />}
    </dialog>
  )
}
