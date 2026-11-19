import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Plugins that were previously in main module
// Import our custom ScreenOrientationService
import { ScreenOrientationService } from '../services/screen-orientation.service';
import { DatabaseService, DatabaseConnection } from 'src/app/services/database.service';
import { DatabaseImportService } from 'src/app/services/database-import.service';

// Import Capacitor plugins - these don't need to be added to providers
import { Keyboard } from '@capacitor/keyboard';
import { Clipboard } from '@capacitor/clipboard';
import { App } from '@capacitor/app';
import { Toast } from '@capacitor/toast';
import { Browser } from '@capacitor/browser'; // Replace InAppBrowser with Capacitor Browser

// Import the ShareService
import { ShareService } from '../providers/share.service';

// Import WakeLockService
import { WakeLockService } from '../services/wake-lock.service';

// Import NetworkService if you're using it
import { NetworkService } from '../services/network.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // Services that need Angular DI
    ShareService,          // Replaced SocialSharing with ShareService
    ScreenOrientationService, // Custom service for screen orientation
    WakeLockService,       // Replaced Insomnia with WakeLockService
    DatabaseImportService,          // Still using DatabaseImportService
    NetworkService,        // If you're using this service
  ]
})
export class CoreModule { }