import Role from '../models/role.js'
import Usuario from '../models/role.js'


export const isValidRole  = (role = '') => {
    const roleExist = Role.findOne({role})
    if (!roleExist) {
      throw new Error(`${role} is not an actual role`)
    }
  }

      //verificar correo duploicado
      export const mailExist = ( mail = '' ) => {
        const exist = Usuario.findOne({mail})
        if (exist) {
            throw new Error(`${mail} already exist`)
          }
    }
