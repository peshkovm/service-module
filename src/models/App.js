import Player from '@/models/Player';
import Status from '@/models/Status';

export default class App {
  status = Status.NONE;

  player = new Player();
}
