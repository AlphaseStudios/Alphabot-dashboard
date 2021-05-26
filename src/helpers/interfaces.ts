export interface BaseGuildData {
  id: number;
  params?: Record<any, any>
}

export interface ServerData {
  enableWelcome?: number,
  fMsg?: string,
  fchannel?: string,
  lvlMsg?: string,
  milestones?: {
    [lvl: number]: string
  },
  modlog?: string,
  muteRole?: string,
  noxp?: Array<string>,
  nword?: string,
  pnc?: string,
  rr?: {
    [snowflake: string]: {
      [emoji: string]: {
        role: string,
        type: number,
      }
    }
  },
  shoutC?: string,
  shoutLvl?: boolean,
  wMsg?: string,
  wchannel?: string,
}

export interface UserData {
  level?: number,
  lvl?: number,
  xp?: number
}
