import {
  Popover,
  PopoverArrow,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverArrowTip,
  PopoverPositioner,
  PopoverTitle,
  PopoverTrigger,
} from "@ark-ui/react";
import { useState } from "react";

const InternalPopover = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <button>Open Popover</button>
      </PopoverTrigger>
      <PopoverPositioner>
        <PopoverContent>
          <PopoverArrow>
            <PopoverArrowTip />
          </PopoverArrow>
          <PopoverTitle>Title </PopoverTitle>
          <PopoverDescription>Description</PopoverDescription>
          <PopoverCloseTrigger>
            <button>Close</button>
          </PopoverCloseTrigger>
        </PopoverContent>
      </PopoverPositioner>
    </Popover>
  );
};

export { InternalPopover as Popover };
