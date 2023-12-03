/** Material de Referencia:  https://www.radix-ui.com/primitives/docs/components/select */

import { forwardRef } from "react";

import {
  Container,
  SelectTrigger,
  SelectContent,
  SelectViewport,
  StyledItem,
  StyledItemIndicator,
} from "./styles";
import * as Select from "@radix-ui/react-select";

import IconArrowDown from "./assets/ArrowDown.svg?react";
import IconCheckItem from "./assets/ArrowCheck.svg?react";

export function InputSelect({ title, value, onValueChange }) {
  return (
    <Container>
      <header>{title}</header>
      <Select.Root value={value} onValueChange={onValueChange}>
        <SelectTrigger>
          <Select.Value placeholder="...">{value}</Select.Value>
          <Select.Icon>
            <IconArrowDown />
          </Select.Icon>
        </SelectTrigger>
        <Select.Portal>
          <SelectContent>
            <SelectViewport>
              <Select.Group>
                <SelectItem value="Refeição">Refeição</SelectItem>
                <SelectItem value="Sobremesa">Sobremesas</SelectItem>
                <SelectItem value="Bebida">Bebidas</SelectItem>
              </Select.Group>
            </SelectViewport>
          </SelectContent>
        </Select.Portal>
      </Select.Root>
    </Container>
  );
}

// eslint-disable-next-line react/display-name
const SelectItem = forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <StyledItem {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <StyledItemIndicator>
        <IconCheckItem />
      </StyledItemIndicator>
    </StyledItem>
  );
});
