import Role from '../models/role.js'
import Usuario from '../models/usuario.js'


export const isValidRole  = (role = '') => {
    const roleExist = Role.findOne({role})
    if (!roleExist) {
      throw new Error(`${role} is not an actual role`)
    }
}

      //verificar correo duploicado


      export const mailExist = async (mail) => {
        const exist = await Usuario.findOne({ mail });
        if (exist) {
          throw new Error(`${mail} already exists`);
        }
      }

export const userExistById = ( id ) => {
  const exist = Usuario.findById({id})
  if (!exist) {
    throw new Error(`${id} does not exist`)
  }
}
