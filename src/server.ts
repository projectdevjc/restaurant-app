import { App } from './App';
import { Config } from './shared/config/Config';
import { STR_UND } from './shared/types/Types';

class Server {
  private static readonly app: App = new App();
  private static readonly PORT: STR_UND = Config.SERVER_PORT;

  public static run(): void {
    this.app.init(this.PORT);
  }
}

Server.run();
