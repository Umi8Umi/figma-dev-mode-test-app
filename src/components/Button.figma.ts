// url=https://www.figma.com/design/0pJndDXDdxjL66TbkV5imw/Dev-Mode-explorations?node-id=1-2490&m=dev

import figma from 'figma'

const instance = figma.selectedInstance
const label = instance.getString('Label')
const disabled = instance.getBoolean('Disabled')

export default {
  example: figma.code`
    <Button disabled={${disabled}}>
      ${label}
    </Button>
  `,
  imports: ["import Button from './components/Button'"],
  id: 'button',
}
