//
//  RNDynatrace.m
//  JBHuntDrive
//
//  Created by Blake Johnston on 4/19/18.
//  Copyright © 2018 Facebook. All rights reserved.
//
//

#import "RNDynatrace.h"
#import <React/RCTLog.h>
#import "Dynatrace.h"

@implementation RNDynatrace

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

+ (NSString *)createTimestamp
{
  NSDate * now = [NSDate date];
  NSDateFormatter *outputFormatter = [[NSDateFormatter alloc] init];
  [outputFormatter setDateFormat:@"yyyy/MM/dd HH:mm:ss"];

  NSString *newDateString = [outputFormatter stringFromDate:now];

  return newDateString;
}

RCT_EXPORT_METHOD(identifyUser:(NULLABLE NSString *)userId)
{
  NSString *newDateString = [RNDynatrace createTimestamp];

  DTX_StatusCode statusCode = [Dynatrace identifyUser:userId];
  RCTLogInfo(@"Dynatrace user event sent for %@ at %@ returned code %d", userId, newDateString, statusCode);
}

RCT_EXPORT_METHOD(startup:(NONNULL NSString *)appId
                  envId:(NONNULL NSString *)envId
                  serverURL:(NONNULL NSString *)serverURL)
{
 NSString *newDateString = [RNDynatrace createTimestamp];

  DTX_StatusCode statusCode = [Dynatrace startupWithApplicationName:appId
                                                          serverURL:serverURL
                                                       allowAnyCert:NO
                                                    certificatePath:nil
                              ];

 RCTLogInfo(@"Dynatrace startup at %@ returned code %d", newDateString, statusCode);
}

RCT_EXPORT_METHOD(shutdown)
{
  NSString *newDateString = [RNDynatrace createTimestamp];

  DTX_StatusCode statusCode = [Dynatrace shutdown];
  RCTLogInfo(@"Dynatrace shutdown at %@ returned code %d", newDateString, statusCode);
}

RCT_EXPORT_METHOD(enterAction:(NONNULL NSString *)actionName)
{
  NSString *newDateString = [RNDynatrace createTimestamp];

  DTXAction *action = [DTXAction enterActionWithName:actionName];
  RCTLogInfo(@"Dynatrace action %@ sent at %@ returned %@", actionName, newDateString, action);
}

@end
