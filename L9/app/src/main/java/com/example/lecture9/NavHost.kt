package com.example.lecture9

import androidx.compose.animation.AnimatedContentTransitionScope
import androidx.compose.animation.core.tween
import androidx.compose.runtime.Composable
import androidx.lifecycle.viewmodel.compose.viewModel
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.example.lecture9.screens.HomeScreen
import com.example.lecture9.screens.SecondScreen
import com.example.lecture9.screens.ThirdScreen

@Composable
fun AppNavigation(navController: NavHostController){

    val nameVM: NameViewModel = viewModel()

    NavHost(
        navController = navController,
        startDestination = Routes.HOME,

        //Optional transition animations; can also be applied per screen
        enterTransition = {
            slideIntoContainer(AnimatedContentTransitionScope.SlideDirection.Left, tween(300))
        },
        exitTransition = {
            slideOutOfContainer(AnimatedContentTransitionScope.SlideDirection.Left, tween(300))
        },
        popEnterTransition = {
            slideIntoContainer(AnimatedContentTransitionScope.SlideDirection.Right, tween(300))
        },
        popExitTransition = {
            slideOutOfContainer(AnimatedContentTransitionScope.SlideDirection.Right, tween(300))
        },
    ){
        composable(Routes.HOME){
            HomeScreen(
                onSecondScreenPressed = {
                    navController.navigate(Routes.SECOND_SCREEN)
                },
                nameVM = nameVM
            )
        }

        composable(Routes.SECOND_SCREEN) {
            SecondScreen(
                onThirdScreenPressed = {
                    navController.navigate(Routes.THIRD_SCREEN)
                },
                onBackPressed = {
                    navController.popBackStack()
                },
                nameVM = nameVM
            )
        }

        composable(Routes.THIRD_SCREEN) {
            ThirdScreen(
                onBackPressed = {
                    navController.popBackStack()
                },
                nameVM = nameVM
            )
        }
    }
}