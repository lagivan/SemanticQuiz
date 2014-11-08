/**
 * ******************************************************************************************************
 *
 *   QuizModule
 *
 *   Defines controllers and services for the Online Quiz
 *
 *  @author     Thomas Burleson
 *  @date       December 2013
 *
 * ******************************************************************************************************
 */

(function ( define, angular ) {
    "use strict";

    define([
            'quiz/builders/SparqlQuizBuilder',
            'quiz/builders/ScoreBuilder',
            'quiz/delegates/QuizDelegate',
            'quiz/controllers/TestController',
            'quiz/controllers/ScoreController'
        ],
        function ( QuizBuilder, ScoreBuilder, QuizDelegate, TestController, ScoreController )
        {
            var moduleName = "quizzer.Quiz";

            angular.module( moduleName, [ ] )
                .service( "quizBuilder",          QuizBuilder )
                .service( "scoreBuilder",         ScoreBuilder )
                .service( "quizDelegate",         QuizDelegate )
                .controller( "TestController",    TestController )
                .controller( "ScoreController",   ScoreController );

            return moduleName;
        });

}( define, angular ));

