import React from 'react'
import { Wrap, WrapItem, Stack, Avatar, AvatarBadge } from '@chakra-ui/react'


function AvatarWithBadge({size, boxSize, bg}) {
  return (
    <div>
        <div>
            <Wrap>
              <WrapItem>
                <Stack>
                  <Avatar size={size}>
                    <AvatarBadge boxSize={boxSize} bg={bg}></AvatarBadge>
                  </Avatar>
                </Stack>
              </WrapItem>
            </Wrap>
        </div>
    </div>
  )
}

export default AvatarWithBadge