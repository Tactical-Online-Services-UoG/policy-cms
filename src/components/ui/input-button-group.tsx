import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"

export function InputButtonGroup() {
  const [searchQuery, setSearchQuery] = useState<string>("")

  return (
    <Field>
      <ButtonGroup>
        <Input id="input-button-group" placeholder="Type to search..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <Button variant="outline">Search</Button>
      </ButtonGroup>
    </Field>
  )
}
