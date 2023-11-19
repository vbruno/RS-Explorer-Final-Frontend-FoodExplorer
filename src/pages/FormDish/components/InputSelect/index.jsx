import {
  Container,
  SelectTrigger,
  SelectContent,
  SelectViewport,
} from "./styles";
import * as Select from "@radix-ui/react-select";

import IconArrowDown from "./assets/ArrowDown.svg?react";

export function InputSelect({ title }) {
  return (
    <Container>
      <header>{title}</header>
      <Select.Root>
        <SelectTrigger>
          <Select.Value placeholder="Refeição" />
          <Select.Icon>
            <IconArrowDown />
          </Select.Icon>
        </SelectTrigger>
        <Select.Portal>
          <SelectContent>
            <SelectViewport>
              <Select.Group>
                <SelectItem>oi</SelectItem>
                <SelectItem>oi</SelectItem>
                <SelectItem>oi</SelectItem>
                <SelectItem>oi</SelectItem>
                <SelectItem>oi</SelectItem>
              </Select.Group>
            </SelectViewport>
          </SelectContent>
        </Select.Portal>
      </Select.Root>
    </Container>
  );
}

const SelectItem = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <StyledItem {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <StyledItemIndicator>
        <CheckIcon />
      </StyledItemIndicator>
    </StyledItem>
  );
});
