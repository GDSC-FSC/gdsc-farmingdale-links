import { Command } from 'cmdk';
import {  useEffect, useState } from 'react'
const SearchCommand = ( ) => {
  const [open, setOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState(window.is)
  useEffect(() => {}, [setOpen]) 
  return (
    <>
    <Command.Dialog open={open} onOpenChange={setOpen}>
  <Command.Input />

  <Command.List>
    {loading && <Command.Loading>Hang on…</Command.Loading>}

    <Command.Empty>No results found.</Command.Empty>

    <Command.Group heading="Fruits">
      <Command.Item>Apple</Command.Item>
      <Command.Item>Orange</Command.Item>
      <Command.Separator />
      <Command.Item>Pear</Command.Item>
      <Command.Item>Blueberry</Command.Item>
    </Command.Group>

    <Command.Item>Fish</Command.Item>
  </Command.List>
</Command.Dialog>
    </>
  )
}