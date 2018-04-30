import { Platform } from 'react-native';

const setupBiometric = name =>
  `Debe configurar ${name} en su dispositivo que utilizará para iniciar sesión en J.B. Hunt Carrier 360.`;

const TouchID = Platform.select({ ios: 'Touch ID', android: 'Fingerprint' });
const FaceID = 'Face ID';

export default {
  App: {
    genericError: 'Failed',
    genericOk: 'OK',
  },
  BottomNav: {
    home: 'Case',
    offers: 'Ofertas',
    find_loads: 'Encuentra cargas',
    my_loads: 'Mis cargas',
    perks: 'Beneficios',
  },
  Login: {
    login_button: 'Iniciar sesión',
    touch_id: `${TouchID}`,
    face_id: `${FaceID}`,
    setup_touch_id: `Configuración ${TouchID}`,
    setup_face_id: `Configuración ${FaceID}`,
    login_touch_id: `Iniciar sesión usando ${TouchID}`,
    login_face_id: `Iniciar sesión usando ${FaceID}`,
    login_touch_id_desc: setupBiometric(TouchID),
    login_face_id_desc: setupBiometric(FaceID),
    password: 'Contraseńa',
    track_load_as_guest: 'Carga de tachuelas como invitado',
    forgotPassword_button: 'contraseńa',
    forgotPassword_text: 'Ha olvidado su',
  },
  LoginPassword: {
    username: 'Nombre de usuario',
    password: 'Contraseña',
    forgotPassword_1: 'Ha olvidado su',
    forgotPassword_2: ' Contraseña',
    login_button: 'Iniciar sesión',
    create_account_1: 'No tienes una cuenta?',
    create_account_2: ' Crea una cuenta ahora',
  },
  ForgotPassword: {
    forgetBody: 'Por favor ingrese la dirección de correo electrónico asociada a su cuenta para solicitar un restablecimiento de contraseña. Mira esto cuenta de correo electrónico para obtener más instrucciones.',
    forgetTitle: '¿Olvidaste tu contraseña?',
    inputPlaceholder: 'Dirección de correo electrónico',
    requestButton: 'Solicitud',
    success: 'El correo electrónico ha sido enviado a la dirección provista',
    errors: {
      cannot_use_jbhunt_email: 'El correo de JB Hunt no puede ser usado',
      user_not_found: 'No se encontró un usuario con esa ID.',
    },
  },
  MoreMenu: {
    profile: 'Perfil',
    manage_users: 'Administrar usuarios',
    feedback: 'Realimentación',
    sign_out: 'Desconectar',
  },
};
